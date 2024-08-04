let expenses = [];

function addExpense() {
  const name = document.getElementById('expense-name').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);

  if (name && !isNaN(amount) && amount > 0) {
    expenses.push({ name, amount });

    updateExpenseList();
    updateTotal();
  }

  document.getElementById('expense-name').value = '';
  document.getElementById('expense-amount').value = '';
}

function updateExpenseList() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = '';

  expenses.forEach(expense => {
    const listItem = document.createElement('li');
    listItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
    expenseList.appendChild(listItem);
  });
}

function updateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  document.getElementById('total-amount').textContent = total.toFixed(2);
}
