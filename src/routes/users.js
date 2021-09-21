const express = require('express')

const router = express.Router()

const User = require('../models/user')

router.get('/', async (req, res) => {
  const users = await User.findAll()

  if (users.length) res.json(users)
  else res.sendStatus(404)
})

router.post('/', async (req, res) => {
  const { username } = req.body
  const user = await User.create({ username })

  res.json(user)
})

router.get('/:uuid', async (req, res) => {
  const { uuid } = req.params

  const user = await User.findOne({ where: { uuid } })

  if (user) res.json(user)
  else res.sendStatus(404)
})

module.exports = router
