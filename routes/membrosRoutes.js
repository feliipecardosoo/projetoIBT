const express = require('express')
const router = express.Router()
const MembrosController = require('../controllers/membrosController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, MembrosController.createMembro)
router.post('/add', checkAuth, MembrosController.createMembroPost)
router.get('/edit', checkAuth, MembrosController.editMembroPost)
router.get('/delete', checkAuth, MembrosController.deleteMembro)
router.post('/delete', checkAuth, MembrosController.deleteMembroPost)
router.get('/dashboard', checkAuth, MembrosController.dashboard)
router.get('/', MembrosController.membros)


module.exports = router