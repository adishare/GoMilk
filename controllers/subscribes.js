const {User,Transaction,Subscribe,Product} = require('../models')
const models = require('../models')

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

    static showAdd(req,res){
        res.render('subscribes/subscribeForm',{user: req.session.user, productId:req.params.productId})
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
                for (let i = 1; i <= range; i+= subscribe.tempo) {
                    transactionsToCreat.push({
                        SubscribeId: subscribe.id,
                        processDate: addDays(subscribe.startDate,i),
                        subtotal : product.price,
                        processed: 'pending'
                    })
                    
                }
                Transaction.bulkCreate(transactionsToCreat)
                .then(() => { 
                    return Transaction.findAll({raw : true});
                }).then(transaction => {
                    console.log(transaction)
                    res.redirect('/')
                })    
            }).catch((err) => {
                res.send(err)
            });
        }).catch((err) => {
            res.send(err) 
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