const mongoose = require('mongoose')
const { imageSchema } = require('./images')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  images: [imageSchema]
}, { users })

module.exports = new mongoose.model('User', userSchema)