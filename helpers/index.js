const {User} = require('../models')

module.exports = class Helper{

    static authentication(req,res,next){
        if(req.session.id){
            next()
        } else {
            res.redirect('/login')
        }
    
    }

    static login(req,res){
        User.findOne({
            where :{username : req.body.username}
        })
        .then((user) => {
            if(user !== null && req.body.password === user.password){
                req.session.user = user
                res.redirect('/')
            } else if(user !== null && req.body.password !== user.password){
                res.render('users/login',{inputed : req.body, err:'Wrong Password !!'})
            } else {
                res.render('users/login',{inputed : req.body, err:'Wrong Username !!'})
            }
        }).catch((err) => {
            res.send(err)
        })
    }

    static getCurrency(num) {
        num = num.toLocaleString();
        return `Rp. ${num}`
    }

}