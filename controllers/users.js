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

    static add(req,res){
        User.create(req.body)
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            
        });
    }

    static update(req,res){
        User.update(
            req.body,
            {where : {id : req.params.userId}}
        )
        .then(() => {
            res.redirect('/')
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