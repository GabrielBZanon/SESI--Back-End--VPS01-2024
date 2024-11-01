const express = require('express')
const router = express.Router()

const clientes = require('./CONTROLLER/controller_clientes')
const carros = require('./CONTROLLER/controller_carros')
const telefone = require('./CONTROLLER/controller_telefone')

router.post('/clientes', clientes.create)
router.get('/clientes', clientes.read)
router.get('/clientes/:id', clientes.create)
router.post('/clentes/:id', clientes.read)

router.post('/carros', carros.create)
router.get('/carros', carros.read)

router.post('/telefone', telefone.create)
router.get('/telefone', telefone.read)
router.get('/telefone/:id', telefone.create)
router.post('/telefone/:id', telefone.read)

module.exports = router;    