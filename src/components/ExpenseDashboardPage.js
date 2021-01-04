import React from 'react';
import ExpenseList from './ExpenseList';
import EditExpensePage from './EditExpensePage';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;