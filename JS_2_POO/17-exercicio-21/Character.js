class Character {
  constructor (name,lifePoints,attackPoints,defensePoints) {
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attack(targetPlayer) {
    let damagePoints = this.attackPoints - targetPlayer.defensePoints
    if(Math.sign(damagePoints) === 1) {
      targetPlayer.lifePoints -= (damagePoints)
    }
  }
}

module.exports = Character