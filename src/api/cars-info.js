const {Router} = require('express');

const CarsInfoDbReq = require('../persistence/cars-info');

const router = new Router();

router.get('/', async (request, response) => {
    try {
        const carsInfo = await CarsInfoDbReq.getAll();

        carsInfo.sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            // a должно быть равным b
            return 0;
        });
        response.status(200).json({data: carsInfo});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.get('/:id', async (request, response) => {
    try {
        const carInfo = await CarsInfoDbReq.find(request.params.id);
        response.status(200).json({data: carInfo});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.post('/', async (request, response) => {
    try {
        const carInfoId = await CarsInfoDbReq.create(request.body.brand, request.body.number);
        response.status(200).json({data: carInfoId});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.put('/', async (request, response) => {
    try {
        const carInfoId = await CarsInfoDbReq.update(request.body.id, request.body.brand, request.body.number);
        response.status(200).json({data: carInfoId});
    } catch (error) {
        response.status(500).json({data: error});
    }
});

module.exports = router;