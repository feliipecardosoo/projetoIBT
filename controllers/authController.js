const User = require('../models/user')

const bcrypt = require('bcryptjs')

module.exports = class AuthController {

    static login(req,res) {
        res.render('auth/login')
    }
    static async loginPost (req,res) {
        const {login, password} = req.body

        // find user 
        const user = await User.findOne({where: {login:login} })

        if (!user) {
            req.flash('message', 'Usuario Inexistente!')
            res.render('auth/register')
            return
        }

        // check if passwords match
        const passwordMatch = bcrypt.compareSync(password, user.password)

        if(!passwordMatch) {
            req.flash('message', 'Senha Invalida!')
            res.render('auth/login')
            return 
        }

        req.session.userid = user.id

        req.session.save(() => {
            res.redirect('membros/dashboard')
        })

    }
    static register(req,res) {
        res.render('auth/register')
    }
    static async registerPost(req,res) {
        const {login, password, confirmpassword} = req.body

        // password match validation
        if(password != confirmpassword) {
            req.flash('message', 'As senhas não conferem')
            res.render('auth/register')

            return
        }

        // check if user exists 
        const checkIfUserExists = await User.findOne({where: {login:login} })

        if (checkIfUserExists) {
            req.flash('message', 'Login ja esta em uso!')
            res.render('auth/register')

            return
        }

        // create a password 
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            login,
            password: hashedPassword
        }

        try {
            const createdUser = await User.create(user)

            // initialize session
            req.session.userid = createdUser.id

            req.session.save(() => {
                res.redirect('membros/dashboard')
            })

        } catch (error) {
            console.log(`Erro ao inserir Usuario no DB ${error}`)
        }
    }
    static logout (req,res) {
        req.session.destroy()
        res.redirect('/')
    }
}