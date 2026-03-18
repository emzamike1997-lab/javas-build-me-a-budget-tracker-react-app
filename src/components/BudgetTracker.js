import React, { useState } from 'react';
;

function BudgetTracker() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [newAmount, setNewAmount] = useState(0);

  const handleAddExpense = () => {
    if (newExpense && newAmount) {
      setExpenses([...expenses, { name: newExpense, amount: newAmount }]);
      setNewExpense('');
      setNewAmount(0);
    }
  };

  const handleRemoveExpense = (index) => {
    setExpenses(expenses.filter((expense, i) => i !== index));
  };

  const handleUpdateIncome = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div className="budget-tracker-container">
      <h2>Budget Tracker</h2>
      <div className="income-container">
        <label>Income:</label>
        <input type="number" value={income} onChange={handleUpdateIncome} />
      </div>
      <div className="expenses-container">
        <h3>Expenses:</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: ${expense.amount}
              <button onClick={() => handleRemoveExpense(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="new-expense-container">
          <input
            type="text"
            value={newExpense}
            onChange={(e) => setNewExpense(e.target.value)}
            placeholder="New Expense"
          />
          <input
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            placeholder="Amount"
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </div>
      <div className="balance-container">
        <h3>Balance:</h3>
        <p>${income - expenses.reduce((acc, curr) => acc + curr.amount, 0)}</p>
      </div>
    </div>
  );
}

export default BudgetTracker;