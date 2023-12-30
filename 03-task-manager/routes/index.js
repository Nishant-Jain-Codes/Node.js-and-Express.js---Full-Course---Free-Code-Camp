const express = require('express')
const router = express.Router()
const apiRouter = require('./api/index.js')
const notFound = require('../middlewares/not-found.js')
router.use('/api', apiRouter)
router.use(notFound)
module.exports = router