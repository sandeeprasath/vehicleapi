var mongoose = require('mongoose')

var VehicleSchema = new mongoose.Schema({
    vin: { type: String },
    year: { type: String }, 
    make: { type: String },
    model: { type: String }
})

var Vehicle = mongoose.model('Vehicle', VehicleSchema)

module.exports = Vehicle