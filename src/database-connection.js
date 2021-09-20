const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('blog-db', 'user', 'password', {
  dialect: 'sqlite',
  host: './dev.sqlite',
})

module.exports = sequelize
