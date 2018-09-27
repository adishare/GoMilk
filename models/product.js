'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    category: DataTypes.STRING,
    unit: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    img : DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.User,{
      through : 'Subscribes'
    })
  };
  return Product;
};