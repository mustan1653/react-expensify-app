import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>&nbsp; Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">&nbsp; Add Expense Page</NavLink>
        <NavLink to="help" activeClassName="is-active">&nbsp; Help</NavLink>
    </header>
)
export default Header;