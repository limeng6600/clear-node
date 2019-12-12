const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')

const app = express()
app.set('env', config.app.env)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '1000kb' }))

app.use('/', (req, res, next) => {
  console.info(`${new Date()} - [${req.method}] ${req.originalUrl}`)
  next()
})

const index = require('./routes/index')
app.use('/api/common', index)


app.listen(config.app.port, () => {
  console.info(`服务器启动于端口 ${config.app.port}`)
})