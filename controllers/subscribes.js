const {User,Transaction,Subscribe,Product} = require('../models')
const models = require('../models')
const helpers = require('../helpers')

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

    static showMySubscribe(req,res){
        Subscribe.findAll({
            where : {UserId : req.session.user.id},
            include : [Transaction,Product]
        })
        .then((subscribes) => {
            res.render('subscribes/userSubscribe',{subscribes})
        }).catch((err) => {
            res.send(err)
        });
    }

    static showAdd(req,res,data){
        res.render('subscribes/subscribeForm',{user: req.session.user, productId:req.params.productId,data})
    }

    static add(req,res,next){
        Subscribe.create(req.body)
        .then((subscribe) => {
            subscribe.getProduct()
            .then((product) => {

                function addDays(date, days) {
                    var result = new Date(date);
                    result.setDate(result.getDate() + days);
                    return result;
                }

                var oneDay = 24*60*60*1000            
                var range = Math.round(Math.abs((subscribe.endDate.getTime() - subscribe.startDate.getTime())/(oneDay)))
                let transactionsToCreat = []
                for (let i = 0; i <= range; i+= subscribe.tempo) {
                    transactionsToCreat.push({
                        SubscribeId: subscribe.id,
                        processDate: addDays(subscribe.startDate,i),
                        subtotal : product.price,
                        processed: 'pending'
                    })
                    
                }
                Transaction.bulkCreate(transactionsToCreat)
                .then(() => { 
                    return Transaction.findAll({raw : true,where:{SubscribeId :subscribe.id}});
                }).then(transaction => {
                    let content = `<p>Kamu telah berlangganan Susu di GoMilk</p> <br> ${helpers.getTable(transaction)}`
                    helpers.sendNotify(req.session.user.email,'Notifikasi Berlangganan GoMilk',content)
                    res.redirect('/subscribes')
                })    
            }).catch((err) => {
                res.send(err)
            });
        }).catch((err) => {
            res.render('subscribes/subscribeForm',{user: req.session.user, productId:req.params.productId,data : err})
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