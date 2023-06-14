const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://0.0.0.0:27017/crud_nov22')

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Connection problem'))

db.on('open', function(){
    console.log(`Connected to MongoDB successfully`)
})

module.exports = db;