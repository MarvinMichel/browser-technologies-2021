const Images = require('../models/images')

function createImage(name, desc, data, mimetype) {
  Images.create({
    name: name,
    description: desc,
    img: {
      data: data,
      contentType: mimetype
    }
  })
}

module.exports = createImage