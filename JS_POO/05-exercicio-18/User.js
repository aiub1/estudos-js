class User {
  constructor (fullName, email, password) {
    this.fullName = fullName
    this.email = email
    this.password = password
  }
  login (verifyEmail, verifyPassword) {
    if(this.email == verifyEmail && this.password == verifyPassword) {
      console.log(`acesso a conta de ${this.fullName} LIBERADO`)
    }else{
      console.log(`ERRO, SENHA E/OU EMAIL ERRADO`)
    }
  }
}

module.exports =  User