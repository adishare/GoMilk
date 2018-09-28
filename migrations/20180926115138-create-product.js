'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      flavor: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER,
        defaultValue : Math.floor(Math.random()*(10-1)+1)
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : new Date
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : new Date
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};