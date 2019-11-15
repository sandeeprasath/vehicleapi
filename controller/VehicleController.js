var Vehicle = require('../models/Vehicle');

exports.addVehicle = function(req, res) {
    var data = req.body;
    var vehicle = new Vehicle();
    
    vehicle.vin = data.vin;
    vehicle.year = data.year;
    vehicle.make = data.make;
    vehicle.model = data.model;
    
    vehicle.save()
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.status(500).json({
                msg: 'Something went wrong.'
            })
        })
}

exports.getAllVehicles = function(req, res) {
    Vehicle.find()
        .then(function(data) {
            res.json(data);
        })
        .catch(function() {
            res.status(500).json({
                msg: 'Something went wrong.'
            })
        })
}

exports.getSingleVehicle = function(req, res) {
    var id = req.params.id;
    
    Vehicle.findById(id)
        .then(function(data) {
            if(data) {
                res.json(data)
            } else {
                res.status(404).json({
                    msg: 'Task Not Found'
                })
            }
        })
        .catch(function() {
            res.status(500).json({
                msg: 'Something went wrong'
            })
        })
}

exports.deleteVehicle = function(req, res) {
    var id = req.params.id;
    
    Vehicle.findByIdAndRemove(id)
        .then(function(data) {
            if(data) {
                res.json({})
            } else {
                res.status(404).json({
                    msg: 'Task Not Found'
                })
            }
        })
        .catch(function() {
            res.status(500).json({
                msg: 'Something Went wrong.'
            })
        })
}

exports.updateVehicle = async function(req, res) {
    var id = req.params.id;
    var data = req.body;
    
    var vehicle = await Vehicle.findById(id);
    
    if(vehicle) {
        vehicle.vin = data.vin;
        vehicle.year = data.year;
        vehicle.make = data.make;
        vehicle.model = data.model;
    
        var updated = await vehicle.save();
    
        if(updated) {
            res.json(updated);
        } else {
            res.status(500).json({
                msg: 'Something went wrong'
            })
        }
    } else {
        res.status(404).json({
            msg: 'Task Not Found'
        })
    }
}