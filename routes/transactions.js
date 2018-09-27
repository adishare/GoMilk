module.exports = app = require('express').Router()
const ControllerTransaction = require('../controllers/transactions.js')

app.get('/:id/process',ControllerTransaction.process)