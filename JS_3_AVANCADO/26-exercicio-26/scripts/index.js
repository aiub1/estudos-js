// DECLARAÇÃO DE VARIAVEIS
let balanceValue = 0
const balanceTitle = document.querySelector('h1')
const form = document.querySelector('form')

// FUNÇÃO PARA CARREGAR PRIMEIRAS TRANSAÇÕES
async function fetchTransactions() {
  const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
  transactions.forEach(renderTransactions)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchTransactions()
})

// FUNÇÃO PARA ATUALIZAR SALDO TOTAL
function updtadeBalance(balance) {
  balanceValue += Number(balance.value)
  balanceTitle.innerText = `Saldo Total: R$ ${balanceValue}`
}

// FUNÇÃO PARA CARREGAR TRANSAÇÕES NA TELA
function renderTransactions(transactionData) {
  // CRIANDO TAG ARTICLE
  const article = document.createElement('article')
  article.classList.add('transaction')
  article.id = `transaction-${transactionData.id}`

  // CRIANDO A DESCRIÇÃO DA TRANSAÇÃO
  const description = document.createElement('h3')
  description.classList.add('transaction')
  description.textContent = (`Descrição: ${transactionData.name}`)
  description.setAttribute('name','transactionDescription')

  // CRIANDO LABEL DE VALOR DA TRANSAÇÃO
  const labelTransaction = document.createElement('label')
  labelTransaction.htmlFor = (`id-transaction-${transactionData.id}`)
  labelTransaction.textContent = (`Valor da transação: `)
  
  // CRIANDO CAMPO INPUT COM O VALOR DA TRANSAÇÃO
  const valueTransaction = document.createElement('input')
  valueTransaction.classList.add('transaction-value')
  valueTransaction.setAttribute('name', 'transactionValue')
  valueTransaction.id = (`id-transaction-${transactionData.id}`)
  valueTransaction.type = 'number'
  valueTransaction.value = transactionData.value
  
  // CRIANDO LABEL DO ID DA TRANSAÇÃO
  const labelId = document.createElement('label')
  labelId.htmlFor = (valueTransaction.id)
  labelId.textContent = (`Id da transação: `)

  // CRIA SPAN COM O VALOR DO ID
  const idTransaction = document.createElement('span')
  idTransaction.setAttribute('name', 'transactionId')
  idTransaction.textContent = transactionData.id

  // CRIANDO BOTÃO PARA DELETAR TRANSAÇÕES
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent =  'Apagar'
  deleteBtn.classList.add('delete-transaction-btn')
  deleteBtn.addEventListener('click', function() { deleteTransaction(this)})

  // CRIANDO BOTÃO PARA ATUALIZAR TRANSAÇÕES
  const updateBtn = document.createElement('button')
  updateBtn.textContent =  'Atualizar'
  updateBtn.classList.add('update-transaction-btn')
  updateBtn.addEventListener('click', function() { updateTransaction(this)})

  // TAGS BR PARA QUEBRARA LINHA
  const br1 = document.createElement('br')
  const br2 = document.createElement('br')

  article.append(description, labelId, idTransaction, br1, labelTransaction, valueTransaction, br2, deleteBtn, updateBtn)
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
  const section = ev.parentNode
  const sectionValue = Number(section.children.transactionValue.value)
  const id = Number(section.children.transactionId.textContent)
  const newValue = {value: sectionValue* -1}

  const respose = await fetch(`http://localhost:3000/transactions/${id}`, {
    method: 'delete'
  })

  section.parentNode.removeChild(section)
  updtadeBalance(newValue)
}

async function updateTransaction(ev) {
  const section = ev.parentNode
  const id = Number(section.children.transactionId.textContent)
  const valueTransaction = Number(section.children.transactionValue.value)
  const nameTransaction = section.children.transactionDescription.textContent

  const transactionData = {
    name: nameTransaction,
    value: valueTransaction
  }

  const response = await fetch(`http://localhost:3000/transactions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData)
  })
}