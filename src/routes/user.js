const express = require('express')

const router = express.Router()

const User = require('../models/user')

router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.send(users)
})

router.post('/', async (req, res) => {
  const post = await User.create(req.body)

  res.send(post)
})

router.get('/:id', async (req, res) => {
  const givenId = req.params.id

  const user = await User.findOne({ where: { id: givenId } })

  res.send(user)
})

module.exports = router
