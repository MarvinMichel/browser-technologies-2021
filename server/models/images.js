const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema({
  name: String,
  description: String,
  img: {
    data: Buffer,
    contentType: String
  }
})

exports.imageSchema = imageSchema
module.exports = new mongoose.model('Images', imageSchema)