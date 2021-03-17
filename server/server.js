const express = require('express')
const chalk = require('chalk')
const createConnection = require('./middleware/createConnection')
const { join } = require('path')
const { urlencoded, static } = express

const PORT = process.env.PORT || 8080
const ROOT = join(__dirname, '../client')
const app = express()
const db = createConnection()

const index = require('./routes/index')

app
  .use(urlencoded({ extended: true }))
  .use(static(ROOT))
  .use('/', index)
  .listen(PORT, () => {
    console.log(chalk.green(`Server running at port ${PORT}`))
  })

exports.db = db