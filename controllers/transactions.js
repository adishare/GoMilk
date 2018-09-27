const {User,Transaction,Subscribe,Product} = require('../models')
const helpers = require('../helpers')
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

    static process(req,res){
        Transaction.update(
            {processed : 'Processed'},
            {where : {id : req.params.id}}
        )
        .then(() => {
            
            Transaction.findAll({where : {id : req.params.id},include : [Subscribe]})
            .then((transactions) => {
                User.findById(transactions[0].Subscribe.UserId)
                .then((user) => {
                    let content = `<p> Hi ${user.username} ! Susu Langganan kamu telah kami antar, silahkan dinikmati .susu gomilk terbaik pokonya  </p>`
                    helpers.sendNotify(user.email,'Processed - GoMilk Notify',content)
                    res.redirect('/admin')
                }).catch((err) => {
                    res.send(err)
                });
            }).catch((err) => {
                res.send(err)
            });
        
        }).catch((err) => {
            res.send(err)
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