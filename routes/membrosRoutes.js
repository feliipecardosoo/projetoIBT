const express = require('express')
const router = express.Router()
const MembrosController = require('../controllers/membrosController')

router.get('/', MembrosController.mostrarMembros)

module.exports = router