const {DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")

const Satelite = sequelize.define("satelites", {
  name: DataTypes.STRING,
  serial_numbers: DataTypes.INTEGER,
  planetIs: DataTypes.INTEGER,
})

module.exports = Satelite