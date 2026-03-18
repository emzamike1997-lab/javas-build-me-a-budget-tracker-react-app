import React, { useState } from 'react';
import './BudgetTracker.css';

function BudgetTracker() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: 0 });

  const handleAddExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({ name: '', amount: 0 });
  };

  const handleRemoveExpense = (index) => {
    setExpenses(expenses.filter((expense, i) => i !== index));
  };

  const handleUpdateExpense = (index, updatedExpense) => {
    setExpenses(expenses.map((expense, i) => i === index ? updatedExpense : expense));
  };

  return (
    <div className="budget-tracker">
      <h1>Budget Tracker</h1>
      <div className="income">
        <label>Income:</label>
        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
      </div>
      <div className="expenses">
        <h2>Expenses:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.name}</span>
              <span>${expense.amount}</span>
              <button onClick={() => handleRemoveExpense(index)}>Remove</button>
              <button onClick={() => handleUpdateExpense(index, { name: 'Updated Expense', amount: 100 })}>Update</button>
            </li>
          ))}
        </ul>
        <div className="new-expense">
          <label>New Expense:</label>
          <input type="text" value={newExpense.name} onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })} />
          <input type="number" value={newExpense.amount} onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })} />
          <button onClick={handleAddExpense}>Add</button>
        </div>
      </div>
      <div className="balance">
        <h2>Balance:</h2>
        <span>${income - expenses.reduce((acc, expense) => acc + expense.amount, 0)}</span>
      </div>
    </div>
  );
}

export default BudgetTracker;