const express = require('express');

const {Router} = express;
const router = new Router();

const user = require('./user');
const session = require('./session');
const gasStations = require('./gas-stations');
const carsInfo = require('./cars-info');
const refuelingOperations = require('./refueling-operations');

router.use('/api/users', user);
router.use('/api/sessions', session);
router.use('/api/gas_stations', gasStations);
router.use('/api/cars_info', carsInfo);
router.use('/api/refueling_operations', refuelingOperations);

module.exports = router;
