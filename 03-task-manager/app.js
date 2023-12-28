const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()
//middle ware
app.use(express.json())
//routes
app.use('/',router)
// ====
const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI).then(()=>{   
            console.log('Connected to the database...')
        })
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}...`)
        })
    }
    catch(error){
        console.log(error)
    }
}
start()