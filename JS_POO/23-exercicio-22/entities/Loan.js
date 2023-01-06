const Installment = require("./Installment")

module.exports = class Loan {

  constructor(value,installmentNumber) {
    this.value = value
    this.date = new Date()
    this.instalement = new Installment()
  }

  static #interestFee = 0.08

  static get interestFeeValue() {
   return Loan.#interestFee
  }

  set interestFee(newInterestFee) {
    this.#interestFee = newInterestFee/100
  }
}