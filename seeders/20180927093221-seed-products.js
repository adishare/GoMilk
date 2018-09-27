'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',[
      {
        name: "GoMilk Original",
        flavor: "Original",
        category: "Susu Sapi",
        unit: "Liter",
        price: 15000,
        img : "https://picsum.photos/320/400/?random"
      },
      {
        name: "GoMilk Fun",
        flavor: "Chocolate",
        category: "Susu Sapi",
        unit: "Liter",
        price: 12000,
        img : "https://picsum.photos/320/300/?random"
      },
      {
        name: "GoMilk Fun",
        flavor: "Banana",
        category: "Susu Sapi",
        unit: "Liter",
        price: 12000,
        img : "https://picsum.photos/320/260/?random"
      },
      {
        name: "Susu Sapi Murni",
        flavor: "Rasa yang pernah ada",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/300/?random"
      },
      {
        name: "Susu Kedelai Merah",
        flavor: "Rasa yang tertinggal",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/200/?random"
      },
      {
        name: "Susu dankow",
        flavor: "Rasanya",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/400/?random"
      },
      {
        name: "Susu Keledai",
        flavor: "Rasa yang pernah ada",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/500/?random"
      },
      {
        name: "Susu Kambing Female",
        flavor: "Rasa Sudoku",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/250/?random"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Products',{
      flavor : {[Op.in] :['Rasa']}
    })
  }
};
