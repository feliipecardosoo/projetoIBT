const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('dbibt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos no bdIbt')
} catch(err) {
    console.log('Nao foi possivel conectar ao banco de dados!')
    console.log(err)
}

module.exports = sequelize