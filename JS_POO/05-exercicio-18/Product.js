class Product {
 constructor (name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
 }
 addToStock (quantity) {
    this.inStock += quantity
 }
 calculateDiscount (percent) {
  let discount = (this.price/100)*percent
  console.log(`O preço de ${this.price}, com desconto de ${percent}% fica R$${this.price - discount}`)
 }
}

module.exports = Product