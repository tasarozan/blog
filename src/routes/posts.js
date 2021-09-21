const express = require('express')

const router = express.Router()

const Post = require('../models/post')
const User = require('../models/user')
const Comment = require('../models/comment')

router.get('/', async (req, res) => {
  const posts = await Post.findAll()

  if (posts.length) res.json(posts)
  else res.sendStatus(404)
})

router.post('/', async (req, res) => {
  const { title, content, userUuid } = req.body

  const user = await User.findOne({ where: { uuid: userUuid } })
  const { username, id } = user

  const post = await Post.create({ title, content, userId: id, author: username })

  res.json(post)
})

router.get('/:uuid', async (req, res) => {
  const { uuid } = req.params
  const post = await Post.findOne({ where: { uuid } })

  if (post) res.json(post)
  else res.sendStatus(404)
})

router.post('/:uuid/comments', async (req, res) => {
  const { userUuid, content } = req.body
  const postUuid = req.params.uuid

  const { title } = await Post.findOne({ where: { uuid: postUuid } })

  const { username } = await User.findOne({ where: { uuid: userUuid } })

  const comment = await Comment.create({ content, author: username, postTitle: title })

  res.json(comment)
})

module.exports = router
