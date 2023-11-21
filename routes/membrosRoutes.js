const express = require('express')
const router = express.Router()
const MembrosController = require('../controllers/membrosController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/dashboard', checkAuth, MembrosController.dashboard)
router.get('/', MembrosController.membros)


module.exports = router