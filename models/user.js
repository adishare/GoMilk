'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {args :true, msg: 'username isi dong'},
        isUnique: function (value, next) {
          let self = this;          
          User.find({where: {username: value}})
          .then(function (found) {
              if (found && self.id != found.id) {
                return next('Username already in use!');
              }
              else return next()
          })
          .catch(function (err) {
              return next(err)
          });
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {args :true, msg: 'Kasih password atuh'}
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {args :true, msg: 'req email nya bwt kirim notif'},
        isEmail : {args :true, msg: 'email gabener'},
        isUnique: function (value, next) {
          let self = this;          
          User.find({where: {email: value}})
          .then(function (found) {
              if (found && self.id != found.id) {
                return next('Email already in use!');
              }
              else return next()
          })
          .catch(function (err) {
              return next(err)
          });
        }
      }
    },
    role: DataTypes.STRING,
    phone: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {args :true, msg: 'no hape kak'}
      }
    },
    address: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {args :true, msg: 'alamat nya plis'}
      }
    }
  }, {

    hooks: {
      beforeValidate: (user, options) => {
        user.username = user.username.toLowerCase()
      }
    }

  });





  User.associate = function(models) {
   User.belongsToMany(models.Product,{
     through : 'Subscribe'
   })
  };



  return User;
};