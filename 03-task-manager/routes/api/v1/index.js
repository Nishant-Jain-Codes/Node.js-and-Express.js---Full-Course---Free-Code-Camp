const express = require('express')
const router = express.Router()
const taskRouter = require('./tasks.js')
router.route('/').get((req, res) => {
    res.send('Hello World! - v1')
})
router.use('/tasks', taskRouter)
module.exports = router