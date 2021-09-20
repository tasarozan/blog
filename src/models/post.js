const { DataTypes } = require('sequelize')
const sequelize = require('../database-connection')

const Post = sequelize.define('Post', {
  content: {
    type: DataTypes.STRING,
  },
  comments: [
    {
      type: DataTypes.STRING,
    },
  ],
})

module.exports = Post
