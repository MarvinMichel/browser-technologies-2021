const chalk = require('chalk')
const Images = require('../models/images')

function removeImage({ id }) {
  Images.deletOne({ _id: id }, err => {
    console.error(chalk.red(err))
  })
}

module.exports = removeImage