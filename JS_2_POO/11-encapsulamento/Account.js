class Account {
  #password
  #balance = 0
  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    }else{
      return null
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

const User = {
  email: "isaac@email.com",
  password: "123456"
}

const myAccount = new Account (User)

console.log(myAccount)
console.log(myAccount.getBalance("isaac@email.com","123456"))