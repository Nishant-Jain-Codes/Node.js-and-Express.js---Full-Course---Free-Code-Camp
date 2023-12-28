const express = require('express')
const router = express.Router()
const apiRouter = require('./api/index.js')
router.route('/').get((req, res) => {
    res.send('Hello World! routes')
})
router.use('/api', apiRouter)

module.exports = router