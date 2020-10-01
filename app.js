const express = require('express')

const logger = require('morgan')

const accountRouter = require('./routes/account.route')

const cors = require('cors')
const whitelist = ['http://localhost:3000', 'https://localhost:3000']
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
const ddos = new Ddos({ burst: 20, limit: 50 })
const app = express()

// multipart de tren dau tranh urlencoded
app.use(ddos.express)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors(corsOptions))

app.use('/', cors(corsOptions), accountRouter)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

module.exports = app
