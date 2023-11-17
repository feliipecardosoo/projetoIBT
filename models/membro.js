const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Membro = db.define('Membro', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone:{
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    instagram: {
        type: DataTypes.STRING,
    },
});

module.exports = Membro