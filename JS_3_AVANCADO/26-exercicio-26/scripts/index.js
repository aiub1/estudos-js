let balanceValue = 0
const balanceTitle = document.querySelector('h1')
const form = document.querySelector('form')

async function fetchTransactions() {
  const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
  transactions.forEach(renderTransactions)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchTransactions()
})

function updtadeBalance(balance) {
  balanceValue += Number(balance.value)
  balanceTitle.innerText = `Saldo Total: R$ ${balanceValue}`
}

function renderTransactions(transactionData) {
  const article = document.createElement('article')
  article.classList.add('transaction')
  article.id = `transaction-${transactionData.id}`

  const description = document.createElement('h3')
  description.classList.add('transaction')
  description.textContent = (`Descrição: ${transactionData.name}`) 

  const labelTransaction = document.createElement('label')
  labelTransaction.htmlFor = (`id-transaction-${transactionData.id}`)
  labelTransaction.textContent = (`Valor da transação: `)

  const valueTransaction = document.createElement('input')
  valueTransaction.classList.add('transaction-value')
  valueTransaction.id = (`id-transaction-${transactionData.id}`)
  valueTransaction.type = 'number'
  valueTransaction.value = transactionData.value

  const idTransaction = document.createElement('div')
  idTransaction.classList.add('transaction-id')
  idTransaction.name = 'idTransaction'
  idTransaction.textContent = (`Id: ${transactionData.id}`)

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent =  'Apagar'
  deleteBtn.classList.add('delete-transaction-btn')
  deleteBtn.addEventListener('click', function() { deleteTransaction(this)})
  const br = document.createElement('br')

  article.append(description, idTransaction, labelTransaction, valueTransaction, br, deleteBtn)
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


async function deleteTransaction(ev) {
  console.log(ev.parentNode.idTransaction);
}