const express = require('express')
const app = express()
const session = require('express-session') 
const {User,Transaction,Subscribe,Product} = require('./models')
const helpers = require('./helpers')
const nodemailer = require('nodemailer');
const tableify = require('html-tableify')

app.locals.helpers = helpers

app.set('view engine','ejs')

app.use(session({secret: 'akupadamu'}))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/register', (req,res)=>{res.render('users/register')})
app.post('/register', (req,res)=>{
    User.create(req.body)
    .then(() => {
        let content = `<p> kamu telah terdaftar di GoMilk app : ${tableify([req.body])} </p>`
        helpers.sendNotify(req.body.email,'GoMilk Notify - Registered',content)
        res.redirect('/')
    }).catch((err) => {
        res.send(err)
    });
})
app.get('/login', (req,res)=>{res.render('users/login',{inputed : null, err:null})})
app.post('/login', require('./helpers').login )



app.use('/', (req,res,next)=>{helpers.authentication(req,res,next)} ,require('./routes'))
app.get('/admin', (req,res,next)=>{helpers.godMode(req,res,next)} ,(req,res)=>{
    Subscribe.findAll({
        include : [Transaction,User,Product]
    })
    .then((subscribes) => {
        res.render('godMode',{subscribes})
        // res.send(subscribes)
    }).catch((err) => {
        res.send(err)
    });
})

app.listen(3000,()=>{console.log('GO! 3000')})