const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    source: String,
    destination: String,
    date: String
})

const User = mongoose.model('User', userSchema)
module.exports = User