'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscribe = sequelize.define('Subscribe', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    tempo: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {});
  Subscribe.associate = function(models) {


    Subscribe.belongsTo(models.User)

    Subscribe.belongsTo(models.Product)

    Subscribe.hasMany(models.Transaction)


  };
  return Subscribe;
};