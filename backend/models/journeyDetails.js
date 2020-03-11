const mongoose = require('mongoose')
const journeyDetailsSchema = new mongoose.Schema({
    source: String,
    destination: String,
    date: String
})

const JourneyDetails = mongoose.model('journeyDetails', journeyDetailsSchema)
module.exports = JourneyDetails