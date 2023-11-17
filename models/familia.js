const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Membro = require('./membro')

const Familia = db.define('Familia', {
    conjuge: {
        type: DataTypes.STRING,
    },
})

Familia.belongsTo(Membro)

module.exports = Familia