'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',[

      {
        name: "Milk Name",
        flavor: "Rasa yang pernah ada",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/300/?random"
      },
      {
        name: "Milk Name",
        flavor: "Rasa yang pernah ada",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/200/?random"
      },
      {
        name: "Milk Name",
        flavor: "Rasa yang pernah ada",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/400/?random"
      },
      {
        name: "Milk Name",
        flavor: "Rasa yang pernah ada",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/500/?random"
      },
      {
        name: "Milk Name",
        flavor: "Rasa yang pernah ada",
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
      flavor : {[Op.in] :['Rasa yang pernah ada']}
    })
  }
};
