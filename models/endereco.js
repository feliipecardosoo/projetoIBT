const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Membro = require('./membro')

const Endereco = db.define('Endereco', {
    cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero: {
        type: DataTypes.INTEGER,
    }
})

Endereco.belongsTo(Membro)

module.exports = Endereco