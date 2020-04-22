const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  type: {
    type: Sequelize.ENUM('cupCake', 'chocolate', 'cakePop', 'cookie'),
    validate: {
      notEmpty: true
    }
  },
  price: {
    // look into getters/setters/class/instance methods/hooks
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      notEmpty: true
    }
  },
  image: {
    // update to imageUrl
    type: Sequelize.STRING, // update to TEXT
    validate: {
      isUrl: true
    },
    defaultValue:
      'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true // set to false
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 1000 // set to 0
  }
})

module.exports = Product
