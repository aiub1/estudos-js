const Addres = require("./Address")

class Person {
  constructor(name, street, number, neighborhood, city, state){
    this.name = name
    this.address = new Addres(name, street, number, neighborhood, city, state)
  }
}

module.exports = Person