const express = require('express')

const router = express.Router()

const Comment = require('../models/comment')

router.get('/', async (req, res) => {
  const comments = await Comment.findAll()

  if (comments.length) res.json(comments)
  else res.sendStatus(404)
})

router.get('/:uuid', async (req, res) => {
  const { uuid } = req.params

  const comment = await Comment.findOne({ where: { uuid } })

  if (comment) res.json(comment)
  else res.sendStatus(404)
})

module.exports = router
