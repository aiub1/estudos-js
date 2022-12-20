const User = require("./User")
const Product = require("./Product")

const aiub = new User('João Aiub Ribeiro', 'joaoribeiroaiub@gmail.com', 123456789)

aiub.login('joaoribeiroaiub@gmail.com',123456789)
aiub.login('joaoribeiroaiub@gmail.co',12345678)

const bolacha = new Product ("Trakinas","sabor morango", 150)

console.log(bolacha)
bolacha.addToStock(10)
console.log(bolacha)
bolacha.calculateDiscount(10)