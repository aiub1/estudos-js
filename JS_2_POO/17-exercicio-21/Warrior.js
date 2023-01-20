const Character = require("./Character")

class Warrior extends Character {
  constructor(name,lifePoints,attackPoints,defensePoints,shieldPoints) {
    super(name,lifePoints,attackPoints,defensePoints)
    this.shieldPoints = shieldPoints
    this.defensePosition = false
  }

  attack(targetPlayer) {
    let damagePoints = this.attackPoints - targetPlayer.defensePoints
    if(this.defensePosition === false){
      if(Math.sign(damagePoints) === 1) {
        targetPlayer.lifePoints -= (damagePoints)
      }
    }else{
      console.log(`${this.name}: VOCÊ ESTÁ EM MODO DE DEFESA`)
    }
  }

  changePosition() {
    if(this.defensePosition === false) {
      this.defensePosition = true
      this.lifePoints += this.shieldPoints
    }else if(this.defensePosition === true) {
      this.defensePosition = false
      this.lifePoints -= this.shieldPoints
    }
  }

}

module.exports = Warrior