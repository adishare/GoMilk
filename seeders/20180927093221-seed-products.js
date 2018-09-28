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
        img : "https://picsum.photos/320/422/?random"
      },
      {
        name: "GoMilk Fun",
        flavor: "Chocolate",
        category: "Susu Sapi",
        unit: "Liter",
        price: 12000,
        img : "https://picsum.photos/320/305/?random"
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
        name: "Susu Dankow",
        flavor: "Rasanyaa",
        category: "Terenak",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/400/?random"
      },
      {
        name: "Susu Keledai",
        flavor: "Rasa Ingin Tau",
        category: "Terlezat",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/500/?random"
      },
      {
        name: "Susu Kambing Female",
        flavor: "Rasa Sudoku",
        category: "Terlezat",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/250/?random"
      },
      {
        name: "Susu Kambing Male",
        flavor: "Rasa Boggle",
        category: "Terlezat",
        unit: "Liter",
        price: 50000,
        img : "https://picsum.photos/320/380/?random"
      },
      {
        name: "Susu Kuda Female",
        flavor: "Rasa Sudoku",
        category: "Terlezat",
        unit: "Liter",
        price: 50000,
        img : "https://picsum.photos/320/370/?random"
      },
      {
        name: "Susu Kuda Male",
        flavor: "Rasa Enak",
        category: "Terlezat",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/360/?random"
      },
      {
        name: "Susu Kedelai Perkasa",
        flavor: "Rasa Enak",
        category: "Terlezat",
        unit: "Liter",
        price: 40000,
        img : "https://picsum.photos/320/350/?random"
      },
      {
        name: "Susu Bubuk Vanila",
        flavor: "Rasa Sudoku",
        category: "Terlezat",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/340/?random"
      },
      {
        name: "Susu Bubuk Chocolate",
        flavor: "Rasa Sudoku",
        category: "Terlezat",
        unit: "Liter",
        price: 20000,
        img : "https://picsum.photos/320/330/?random"
      },
      {
        name: "Susu Kental",
        flavor: "Rasa Sudoku",
        category: "Terlezat",
        unit: "Kaleng",
        price: 20000,
        img : "https://picsum.photos/320/320/?random"
      },
      {
        name: "Susu Kental",
        flavor: "Rasa Sudoku",
        category: "Terlezat",
        unit: "Kaleng",
        price: 20000,
        img : "https://picsum.photos/320/310/?random"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Products',{
      price : {[Op.gt] :1}
    })
  }
};
