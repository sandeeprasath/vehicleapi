var express = require('express');
var router = express.Router();

var VehicleController = require('../controller/VehicleController');

router.get('/', VehicleController.getAllVehicles);

router.get('/:id', VehicleController.getSingleVehicle);

router.post('/',  VehicleController.addVehicle);

router.put('/:id', VehicleController.updateVehicle);

router.delete('/:id', VehicleController.deleteVehicle);


module.exports = router