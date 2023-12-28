const express = require('express')
const router = express.Router()
const v1Router = require('./v1/index.js')


router.route('/').get((req, res) => {
    res.send('Hello World! - api')
})
router.use('/v1', v1Router)

module.exports = router