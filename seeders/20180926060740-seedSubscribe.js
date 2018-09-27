'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subscribes',[

      {
        UserId: 2,
        ProductId: 1,
        tempo: 1,
        startDate: new Date('2018-9-27'),
        endDate: new Date('2018-10-27'),
        status: 0
      }

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subscribes',{
      UserId : 2
    })
  }
};
