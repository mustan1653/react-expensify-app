import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);
let hasRendered = false;
const renderApp = () => {
   if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true;
   }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      store.dispatch(login(user.uid));
      console.log('uid', user.uid)
      store.dispatch(startSetExpenses()).then(() => {
         renderApp();
         if (history.location.pathname === '/') {
            history.push('/dashboard');
         }
      });
   } else {
      store.dispatch(logout());
      renderApp();
      console.log('logout')
      history.push('/');
   }
});

