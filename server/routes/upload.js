const router = require('express').Router()

const upload = require('../middleware/uploadImage')
const createImage = require('../middleware/createImage')

router.get('/', (req, res) => {
  res.render('upload')
})

router.post('/', upload.single('image'), (req, res) => {
  createImage(
    req.body.name,
    req.body.desc,
    req.file.buffer,
    req.file.mimetype
  )
  res.redirect('/')
})

module.exports = router