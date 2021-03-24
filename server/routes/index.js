const router = require('express').Router()

router.get('/', async (req, res) => {
  res.redirect('/images')
})

module.exports = router