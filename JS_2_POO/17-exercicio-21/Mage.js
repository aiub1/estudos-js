const Character = require("./Character")

class Mage extends Character {
  constructor(name,lifePoints,attackPoints,defensePoints,magicPoints){
    super(name,lifePoints,attackPoints,defensePoints)
    this.magicPoints = magicPoints
  }

  attack(targetPlayer) {
    let damagePoints = ((this.attackPoints + this.magicPoints)- targetPlayer.defensePoints)
    if(Math.sign(damagePoints) === 1) {
      targetPlayer.lifePoints -= (damagePoints)
    }
  }

  health(targetPlayer) {
    if(Math.sign(this.magicPoints) === 1){
      targetPlayer.lifePoints += (this.magicPoints*2)
    }
  }
}

module.exports = Mage