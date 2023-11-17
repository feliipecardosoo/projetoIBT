const Membro = require('../models/membro')
const User = require('../models/user')

module.exports = class MembrosController {
    static async mostrarMembros(req,res) {
        res.render('membros/home')
    }
}