const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Membro = db.define('Membro', {
    nome: {
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
    conjuge: {
        type: DataTypes.STRING,
    },
    data_batismo: {
        type: DataTypes.DATE,
    },
    data_casamento: {
        type: DataTypes.DATE,
    },
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
});

module.exports = Membro