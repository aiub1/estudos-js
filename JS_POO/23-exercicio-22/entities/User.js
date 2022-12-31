module.exports = class User {
  #cpf
  constructor(fullName, email, cpf) {
    this.fullName = fullName
    this.email = email
    this.#cpf = cpf
  }

  get cpf(){
    return this.#cpf
  }
}