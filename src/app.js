import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
 

const store = configureStore();
console.log('test');
//console.log(visibleExpenses);

const  jsx =(
   <Provider store={store}>
        <AppRouter />
   </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

  