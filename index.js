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

//register handler
app.get('/register', (req,res,data)=>{res.render('users/register',{data, inputed : null})})
app.post('/register', (req,res,data)=>{
    User.create(req.body)
    .then(() => {
        let content = `<p> kamu telah terdaftar di GoMilk app : ${tableify([req.body])} </p>`
        helpers.sendNotify(req.body.email,'GoMilk Notify - Registered',content)
        res.redirect('/')
    }).catch((err) => {
        res.render('users/register',{data : err,inputed : req.body})
    });
})
//login handler
app.get('/login', (req,res)=>{res.render('users/login',{inputed : null, err:null})})
app.post('/login', require('./helpers').login )
app.get('/logout', (req,res)=>{
    req.session.user = null
    res.redirect('/')
})
//send session to locals
app.use(function(req, res, next) {
    res.locals.loggedInUser = req.session.user;
    next();
});
//routes
app.use('/', (req,res,next)=>{helpers.authentication(req,res,next)} ,require('./routes'))
// god mode
app.get('/admin', (req,res,next)=>{helpers.godMode(req,res,next)} ,(req,res)=>{
    Subscribe.findAll({
        include : [Transaction,User,Product]
    })
    .then((subscribes) => {
        res.render('godMode',{subscribes})
    }).catch((err) => {
        res.send(err)
    });
})

app.listen(3000,()=>{console.log('GO! 3000')})