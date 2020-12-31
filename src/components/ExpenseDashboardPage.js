import React from 'react';
import ExpenseList from './ExpenseList';
import EditExpensePage from './EditExpensePage';
import ExpenseListFilter from './ExpenseListFilter';


const ExpenseDashboardPage = () => (
    <div>
       <ExpenseListFilter />
       <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;