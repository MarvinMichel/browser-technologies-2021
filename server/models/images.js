const mongoose = require('mongoose')

const Schema = mongoose.Schema

export const imageSchema = new Schema({
  data: Buffer,
  contentType: String
}, { images })

module.exports = new mongoose.model('Image', imageSchema)