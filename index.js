const port = process.env.PORT || 5000;
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const messagesRoutes = require('./routes/messages')
const { dbLink } = require('./dbLink/dbLink');
const cors = require('cors')

app.use(cors())

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'https://oliinykkostya.github.io/')
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.set('Access-Control-Allow-Headers', 'content-type')
  res.set('Access-Control-Allow-Methods', 'POST')
  next();
})

app.use(messagesRoutes)

async function start() {
  try {
    await mongoose.connect(dbLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`))
  } catch (error) {
    console.log(error)
  }
}

app.use(express.static('build'))

start()
