const Installment = require("./Installment")

module.exports = class Loan {

  constructor(value,installmentNumber) {
    this.value = value
    this.date = new Date()
    this.instalement = new Installment((value+(value*Loan.#interestFee)),installmentNumber)
  }

  static #interestFee = 0.08

  get interestFeeValue() {
   return Loan.#interestFee
  }

  set interestFee(newInterestFee) {
    Loan.#interestFee = newInterestFee/100
  }
}