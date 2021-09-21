const { DataTypes } = require('sequelize')
const sequelize = require('../database-connection')

const Post = sequelize.define(
  'Post',
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    classMethods: {
      associate(models) {
        models.Post.hasOne(models.User, { foreignKey: 'userId', as: 'users' })
      },
    },
  }
)

module.exports = Post
