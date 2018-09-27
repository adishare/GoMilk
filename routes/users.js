module.exports = app = require('express').Router()
const ControllerUser = require('../controllers/users.js')

app.get('/', ControllerUser.showIndex)

app.get('/edit', ControllerUser.showEdit)
app.post('/update', ControllerUser.update)
