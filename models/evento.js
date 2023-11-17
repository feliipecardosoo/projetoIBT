const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Membro = require('./membro')

const Evento = db.define('Evento', {
    data_conversao: {
        type: DataTypes.DATE,
    },
    data_batismo: {
        type: DataTypes.DATE,
    },
    data_casamento: {
        type: DataTypes.DATE,
    }
})

Evento.belongsTo(Membro)

module.exports = Evento