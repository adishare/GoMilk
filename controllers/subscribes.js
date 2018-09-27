const {User,Transaction,Subscribe,Product} = require('../models')

module.exports = class ControllerSubscribe {

    static findAll(req,res){
        Subscribe.findAll({
            include : [User,Product]
        })
        .then((subscribes) => {
            res.send(subscribes)
        }).catch((err) => {
            res.send(err)
        });
    }

    static add(req,res){
        Subscribe.create(req.body)
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            
        });
    }

    static update(req,res){
        Subscribe.update(
            req.body,
            {where : {id : req.params.subscribeId}}
        )
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

    static remove(req,res){
        Subscribe.destroy({
            where : {id : req.params.subscribeId}
        })
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

}