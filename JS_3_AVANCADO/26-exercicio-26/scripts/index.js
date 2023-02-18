let balanceValue = 0
const balanceTitle = document.querySelector('h1')
const form = document.querySelector('form')

async function fetchTransactions() {
  const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
  console.log(transactions);
  transactions.forEach(renderTransactions)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchTransactions()
})

function updtadeBalance(balance) {
  balanceValue += Number(balance.value)
  console.log(balanceValue);
  balanceTitle.innerText = `Saldo Total: R$ ${balanceValue}`
}

function renderTransactions(transactionData) {
  const article = document.createElement('article')
  article.classList.add('transaction')
  article.id = `transaction-${transactionData.id}`

  const description = document.createElement('h3')
  description.classList.add('transaction')
  description.textContent = `Descrição: ${transactionData.name}` 

  const valueTransaction = document.createElement('div')
  valueTransaction.classList.add('transaction-value')
  valueTransaction.textContent = `Valor: ${transactionData.value}`

  const idTransaction = document.createElement('div')
  idTransaction.classList.add('transaction-id')
  idTransaction.textContent = `Id: ${transactionData.id}`

  article.append(description,valueTransaction, idTransaction)
  document.getElementById('transactions').appendChild(article)
  updtadeBalance(transactionData)
}

form.addEventListener('submit', async (ev) => {
  ev.preventDefault()

  const transactionData = {
    name: document.getElementById('nameTransaction').value,
    value: Number(document.getElementById('valueTransaction').value)
  }

  const response = await fetch('http://localhost:3000/transactions', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData)
  })

  const savedTransaction = await response.json()
  form.reset()
  renderTransactions(savedTransaction)
})