const mongoose = require('mongoose')

const connectDB  = (url) => {
    return mongoose.connect(url,{
        // configuration to avoid deprecation warnings
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })

}

module.exports = connectDB