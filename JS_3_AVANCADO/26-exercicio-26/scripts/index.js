let balance = 0
const balanceTitle = document.querySelector('h1')

async function fetchTransactions() {
  const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
  transactions.forEach(renderTransactions)
  
  for (let k in transactions) {
    balance += transactions[k].value
  }
  updtadeBalance(balance)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchTransactions()
})

function updtadeBalance(balance) {
  balanceTitle.innerText = `Saldo Total: R$ ${balance}`
}

function renderTransactions(transactionData) {
  const article = document.createElement('article')
  article.classList.add('transaction')
  article.id = `transaction-${transactionData.id}`

  const description = document.createElement('h3')
  description.classList.add('transaction')
  description.textContent = transactionData.name 

  console.log(article);

  article.append(description)
  document.getElementById('transactions').appendChild(article)
}