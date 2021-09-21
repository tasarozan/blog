const { DataTypes } = require('sequelize')
const sequelize = require('../database-connection')

const Comment = sequelize.define('Comment', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Comment
