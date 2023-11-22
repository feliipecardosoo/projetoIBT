const Membro = require('../models/membro')
const User = require('../models/user')


module.exports = class MembrosController {
    static async dashboard (req,res) {
        res.render('membros/dashboard')  
    }
    static async membros(req,res) {
        res.render('membros/main') 
    }
}