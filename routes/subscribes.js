module.exports = app = require('express').Router()
const ControllerSubscribe = require('../controllers/subscribes.js')

app.get('/',ControllerSubscribe.showMySubscribe)

app.get('/:productId', ControllerSubscribe.showAdd)
app.post('/:productId', ControllerSubscribe.add)