const {User,Transaction,Subscribe,Product} = require('../models')

module.exports = class ControllerUser {

    static findAll(req,res){
        User.findAll({
            include : [Subscribe]
        })
        .then((users) => {
            res.send(users)
        }).catch((err) => {
            res.send(err)
        });
    }

    static showIndex(req,res){
        res.render('users/userDetail',{user : req.session.user})
    }

    static add(req,res){
        User.create(req.body)
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            
        });
    }

    static showEdit(req,res){
        res.render('users/userEdit',{user : req.session.user})
    }

    static update(req,res){
        User.update(
            req.body,
            {where : {id : req.session.user.id}}
        )
        .then(() => {
            res.redirect('/users')
        }).catch((err) => {
            res.send(err)
        });
    }

    static remove(req,res){
        User.destroy({
            where : {id : req.params.userId}
        })
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

}