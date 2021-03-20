const router = require('express').Router()
const chalk = require('chalk')

const Images = require('../models/images')

router.get('/', async (req, res) => {
  const images = await Images.find({})
    .catch(err => console.error(chalk.red(err)))
  
  res.render('index', { images })
})

module.exports = router