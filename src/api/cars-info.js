const {Router} = require('express');

const CarsInfoDbReq = require('../persistence/cars-info');

const router = new Router();

router.get('/', async (request, response) => {
    try {
        const gasStations = await CarsInfoDbReq.getAll();
        response.status(200).json({data: gasStations});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.get('/:id', async (request, response) => {
    try {
        const gasStation = await CarsInfoDbReq.find(request.params.id);
        response.status(200).json({data: gasStation});
    } catch (error) {
        response.status(500).json({data: error});
    }
});

module.exports = router;