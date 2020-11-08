const express = require('express')
const logger = require('morgan')

const accountRouter = require('./routes/account.route')
const phoneBookRouter = require('./routes/phonebook.route')
const roomRouter = require('./routes/room.route')

const app = express()

const cors = require('cors')
const whitelist = [
  'http://localhost:3000',
  'https://localhost:3000',
  'exp://127.0.0.1:19000',
  'https://zola-admin.vercel.app',
  'http://localhost:19002',
  'https://localhost:19002',
  'https://admin.zolavn.cf',
  'https://zola-client.vercel.app',
  'https://zolavn.cf',
  'http://127.0.0.1:8887',
  'http://localhost:8887'
]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
const Ddos = require('ddos')
// let ddos = new Ddos({burst:15, limit:10});
const ddos = new Ddos({ burst: 20, limit: 100 })

// multipart de tren dau tranh urlencoded
app.use(ddos.express)
app.use(logger('dev'))
app.use(cors(corsOptions))

app.use('/', accountRouter)
app.use('/', phoneBookRouter)
app.use('/', roomRouter)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
module.exports = app
