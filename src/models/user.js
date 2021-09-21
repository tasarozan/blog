const { DataTypes } = require('sequelize')
const sequelize = require('../database-connection')

const User = sequelize.define(
  'User',
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
    },
  },
  {
    classMethods: {
      associate(models) {
        models.User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' })
      },
    },
  }
)

module.exports = User
