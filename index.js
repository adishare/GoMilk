const express = require('express')
const app = express()
const session = require('express-session') 
const {User} = require('./models')

app.locals.helpers = require('./helpers')

app.set('view engine','ejs')

app.use(session({secret: 'akupadamu'}))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/register', (req,res)=>{res.render('users/register')})
app.get('/login', (req,res)=>{res.render('users/login',{inputed : null, err:null})})
app.post('/login', require('./helpers').login )



app.use('/',(req,res,next)=>{

    req.session.user = { 
        id: 2,
        username: 'faishal',
        password: 'faishal',
        email: 'faishal@gmail.com ',
        role: 'customer',
        phone: '085721199999',
        address: 'pisangan',
    }

    next()

} ,require('./routes'))

app.listen(3000,()=>{console.log('GO! 3000')})