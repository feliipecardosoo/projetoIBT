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
    conjuge: {
        type: DataTypes.STRING,
    },
    data_conversao: {
        type: DataTypes.DATE,
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