const Sequelize = require('sequelize');
const db = require('../db');

const Stock = db.define('stock', {
  itemName: {
    type: Sequelize.STRING,
  },
  inStock: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Stock;
