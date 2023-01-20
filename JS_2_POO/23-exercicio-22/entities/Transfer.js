module.exports = class Transfer {
  constructor(debtor, payee, value) {
    this.debtor = debtor
    this.payee = payee
    this.value = value
    this.transferDate = new Date()
  }
}
// payee = quem recebe
// debtor = quem paga