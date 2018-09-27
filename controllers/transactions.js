const {User,Transaction,Subscribe,Product} = require('../models')

module.exports = class ControllerTransaction {

    static findAll(req,res){
        Transaction.findAll({
            include : [Subscribe]
        })
        .then((transactions) => {
            res.send(transactions)
        }).catch((err) => {
            res.send(err)
        });
    }

    static add(req,res){
        Transaction.create(req.body)
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            
        });
    }

    static update(req,res){
        Transaction.update(
            req.body,
            {where : {id : req.params.transactionId}}
        )
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

    static remove(req,res){
        Transaction.destroy({
            where : {id : req.params.transactionId}
        })
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

}