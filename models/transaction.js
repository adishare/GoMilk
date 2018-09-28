'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    SubscribeId: DataTypes.INTEGER,
    processDate: DataTypes.DATE,
    subtotal: DataTypes.INTEGER,
    processed: DataTypes.STRING
  }, {});


  Transaction.prototype.getCurrency = function(){
    this.subtotal = this.subtotal.toLocaleString();
    return `Rp. ${this.subtotal}`
  }

  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Subscribe)  
  };


  return Transaction;
};