const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = User