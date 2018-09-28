const {User} = require('../models')
const tableify = require('html-tableify')
const nodemailer = require('nodemailer');
const moment = require('moment');

module.exports = class Helper{

    static dateOnly(timestamp){
        let onlydate = moment(timestamp).format("dddd, DD-MMM-YYYY")
        return onlydate
    }

    static authentication(req,res,next){
        if(req.session.user){
            next()
        } else {
            res.redirect('/login')
        }
    }

    static godMode(req,res,next){
        if(req.session.user && req.session.user.role == 'admin' ){
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

    static getTable(arrOfObj){
        return tableify(arrOfObj)
    }

    static sendNotify(to,subject,htmlcontent){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'gomilkid@gmail.com',
                pass: 'gomilk123456789'
            }
        });
        const mailOptions = {
            from: 'gomilkid@gmail.com', 
            to: to, 
            subject: subject, 
            html: htmlcontent
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
    }

    static getFormattedDate(date){
        let formatted = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        return formatted
    }



}