// nome - pontos de vida - pontos de ataque - pontos de defesa
const Character = require("./Character")

class Thief extends Character {
  constructor (name,lifePoints,attackPoints,defensePoints) {
    super(name,lifePoints,attackPoints,defensePoints)
  }

  attack(targetPlayer) {
    let damagePoints = ((this.attackPoints - targetPlayer.defensePoints)*2)
    if(Math.sign(damagePoints) === 1) {
      targetPlayer.lifePoints -= (damagePoints)
    }
  }
}

module.exports = Thief