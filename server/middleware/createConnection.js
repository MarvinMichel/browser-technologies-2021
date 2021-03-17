const mongoose = require('mongoose')
const chalk = require('chalk')

function createConnection() {
  const username = "admin"
  const password = "a2TuHam98!TVcCC"
  const dbName = "image-album"
  const URI = `
    mongodb+srv://${username}:${password}@images.mpegm.mongodb.net/${dbName}?retryWrites=true&w=majority
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