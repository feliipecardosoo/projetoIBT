const Membro = require('../models/membro')
const User = require('../models/user')


module.exports = class MembrosController {
    static async dashboard (req,res) {
        res.render('membros/dashboard')  
    }
    static createMembro (req,res) {
        res.render('membros/create')
    }
    static async createMembroPost (req,res) {

        const membro = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            data_nascimento: req.body.dataNascimento,
            instagram: req.body.instagram,
            cep: req.body.cep,
            rua: req.body.rua,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            numero: req.body.numero,
            data_conversao: req.body.dataConversao,
            data_batismo: req.body.batismo,
            conjuge: req.body.conjuge
        }


        try {
            await Membro.create(membro);

            req.flash('message', 'Membro cadastrado!')
    
            req.session.save(() => {
                res.redirect('/membros/dashboard')
            })
            
        } catch (error) {
            console.log(`Erro ao tentar inserir membro ${error}`)
        }
    
        

    }
    static async membros(req,res) {
        res.render('membros/main') 
    }
}