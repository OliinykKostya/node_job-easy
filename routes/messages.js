const { Router } = require('express')
const router = Router()
const bodyParser = require('body-parser')
const Message = require('../models/Message')


router.get('/api', async (req, res) => {

  Message.find()
    .then(message => res.json(message))
    .catch(err => res.status(400).json('Error:' + err))
})

router.post('/api', bodyParser.json(), async (req, res) => {

  const message = new Message({
    id: req.body.id,
    name: req.body.name,
    message: req.body.message,
  })

  await message.save()
    .then(() => res.json("added new message"))
    .catch(err => res.status(400).json('Error:' + err))

})

module.exports = router;