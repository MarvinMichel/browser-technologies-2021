const mongoose = require('mongoose')
const chalk = require('chalk')
const dotenv = require('dotenv')

dotenv.config()

function createConnection() {
  const DB_USER = process.env.DB_USER
  const DB_PASS = process.env.DB_PASS
  const DB_NAME = process.env.DB_NAME
  const URI = `
    mongodb+srv://${DB_USER}:${DB_PASS}@images.mpegm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority
  `

  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, err => {
    err
      ? console.error(chalk.red(err))
      : console.info(chalk.green('MongoDB is connected'))
  })

  return mongoose.connection
}

module.exports = createConnection