'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    SubscribeId: DataTypes.INTEGER,
    processDate: DataTypes.DATE,
    subtotal: DataTypes.INTEGER,
    processed: DataTypes.STRING
  }, {});

  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Subscribe)  
  };


  return Transaction;
};