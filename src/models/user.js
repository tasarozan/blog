const { DataTypes } = require('sequelize')
const sequelize = require('../database-connection')

const Post = require('./post')

const User = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
    },
    // posts: [
    //   {
    //     type: DataTypes.STRING,
    //   },
    // ],
  },
  {
    // classMethods: {
    //   async createPost(content) {
    //     const post = await Post.create({ content })
    //     // await this.posts.push(post)
    //     await this.save()
    //   },
    // },
  }
)

module.exports = User
