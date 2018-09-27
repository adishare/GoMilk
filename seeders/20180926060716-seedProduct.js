'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',[

      {
        name: "GoMilk Original",
        flavor: "Original",
        category: "Susu Sapi",
        unit: "Liter",
        price: 15000
      },
      {
        name: "GoMilk Fun",
        flavor: "Chocolate",
        category: "Susu Sapi",
        unit: "Liter",
        price: 12000
      },
      {
        name: "GoMilk Fun",
        flavor: "Banana",
        category: "Susu Sapi",
        unit: "Liter",
        price: 12000
      }

    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Products',{
      name : {[Op.in] :['GoMilk']}
    })
  }
};
