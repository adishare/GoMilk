module.exports = app = require('express').Router()
const ControllerSubscribe = require('../controllers/subscribes.js')

//userid/subscribe
app.get('/:productId', ControllerSubscribe.showAdd)
app.post('/:productId', ControllerSubscribe.add)