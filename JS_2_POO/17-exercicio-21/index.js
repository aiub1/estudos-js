// nome - pontos de vida - pontos de ataque - pontos de defesa
const Thief = require("./Thief")
const Character = require("./Character")
// nome - pontos de vida - pontos de ataque - pontos de defesa - pontos de magia
const Mage = require("./Mage")
// nome - pontos de vida - pontos de ataque - pontos de defesa - pontos de escudo
const Warrior = require("./Warrior")

const Trevor = new Thief("Trevor", 100, 75, 50)

const Franklin = new Character("Franklin", 100, 20, 50)

const Gandalf = new Mage("Gandalf",100, 65, 50, 15) 

const Conan = new Warrior("Conan",100,80,30,30)

// Trevor.attack(Franklin)
// Gandalf.attack(Trevor)
// console.log(Trevor)
// Gandalf.health(Trevor)
// console.log(Trevor)

console.log(Conan)
Conan.changePosition()
console.log(Conan)
Conan.attack(Gandalf)

Conan.changePosition()
console.log(Conan)
console.log(Gandalf)
Conan.attack(Gandalf)
console.log(Gandalf)
Gandalf.health(Gandalf)
console.log(Gandalf)