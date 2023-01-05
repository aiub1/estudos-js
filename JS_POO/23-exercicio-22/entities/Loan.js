module.exports = class Loan {
  #installmentsValue
  constructor (value, installmentsNumber) {
    this.value = value
    this.installmentsNumber = installmentsNumber
    this.date = new Date()
  }

  static interestFee = 0.08


}