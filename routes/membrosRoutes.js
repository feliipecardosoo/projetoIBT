const express = require('express')
const router = express.Router()
const MembrosController = require('../controllers/membrosController')

router.get('/dashboard', MembrosController.dashboard)
router.get('/', MembrosController.mostrarMembros)


module.exports = router