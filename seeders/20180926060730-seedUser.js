'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[
      
      {
        username: "adishare",
        password: 'adishare',
        email: 'adie.share@gmail.com ',
        phone: '085721192032',
        address: 'pondok indah mall',
        role: 'admin'
      },
      {
        username: "faishal",
        password: 'faishal',
        email: 'faishal@gmail.com ',
        phone: '085721199999',
        address: 'pisangan',
        role: 'customer'
      }

    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Users',{
      username : {[Op.in] : ['adishare','faishal']}
    })
  }
};
