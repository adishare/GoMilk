module.exports = app = require('express').Router()
const ControllerProduct = require('../controllers/products.js')

app.get('/', ControllerProduct.findAll)

app.get('/:productId', ControllerProduct.productDetail)
