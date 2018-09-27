const app = require('express').Router()

app.get('/',(req,res)=>{
    res.redirect('/products')
})

app.use('/products',require('./products.js'))
app.use('/users',require('./users.js'))
app.use('/subscribes',require('./subscribes.js'))
app.use('/transactions',require('./transactions.js'))

module.exports = app