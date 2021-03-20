const chalk = require('chalk')
const Images = require('../models/images')

function getImage({ _id }) {
  Images.findById(_id, err => console.error(chalk.red(err)))
}

function getImages(images) {
  images.forEach(image => getImage(image))
}

exports.getImage = getImage
exports.getImages = getImages