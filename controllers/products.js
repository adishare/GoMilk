const {Product,Subscibe} = require('../models')
const tableify = require('html-tableify')

module.exports = class ControllerProduct {

    static findAll(req,res,cb){
        Product.findAll()
        .then((products) => {
            res.render('products',{products})
        }).catch((err) => {
            res.send(err)
        });
    }

    static productDetail(req,res){
        Product.findById(req.params.productId)
        .then((product) => {
            res.render('products/productDetail',{product})
        }).catch((err) => {
            res.send(err)
        });
    }

    static add(req,res){
        Product.create(req.body)
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

    static update(req,res){
        Product.update(
            req.body,
            {where : {id : req.params.productId}}
        )
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

    static remove(req,res){
        Product.destroy({
            where : {id : req.params.productId}
        })
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }


}