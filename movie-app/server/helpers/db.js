const mongoose = require('mongoose')

module.exports = ()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    mongoose.connection.on('open', ()=> {
        console.log("MongoDb connected")
    })
    mongoose.connection.on('error', (err)=> {
        console.log("MongoDb error:", err)
    })
}