// const Addres = require("./Address");
const Person = require("./Person");

// const addr = new Addres("7 de Setembro", 99, "Centro", "São Fidélis", "RJ")
const john = new Person("John Doe", "7 de Setembro", 99, "Centro", "São Fidélis", "RJ")

console.log(john);
console.log(john.address.fullAddres());