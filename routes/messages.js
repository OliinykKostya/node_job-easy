const { Router} = require('express')
const router = Router()
const bodyParser = require('body-parser')
const Message = require('../models/Message')


router.get('/api', async(req, res) => {
 
  const message = await Message.find({})

  res.json(message)
})

router.post('/api', bodyParser.json(), async (req, res) => {
  
  const message = new Message ({
    id: req.body.id,
    name: req.body.name,
    message: req.body.message,
  })
  
  await message.save();

  const messages = await Message.find({})

  res.json(messages)
})

module.exports = router;