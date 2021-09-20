const express = require('express')

const router = express.Router()

const Post = require('../models/post')

router.get('/', async (req, res) => {
  const posts = await Post.findAll()
  res.send(posts)
})

router.post('/', async (req, res) => {
  const post = await Post.create(req.body)

  res.send(post)
})

router.get('/:id', async (req, res) => {
  const givenId = req.params.id
  const post = await Post.findOne({ where: { id: givenId } })

  res.send(post)
})

module.exports = router
