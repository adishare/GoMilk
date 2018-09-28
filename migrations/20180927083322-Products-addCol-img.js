'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products','img',{
      type : Sequelize.STRING,
      defaultValue : `https://picsum.photos/320/${Math.floor(Math.random()*(500-320)+320)}/?random` 
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products','img')
  }
};
