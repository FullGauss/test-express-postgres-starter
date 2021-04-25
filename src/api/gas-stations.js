const {Router} = require('express');

const GasStationsDbReq = require('../persistence/gas-stations');

const router = new Router();

router.get('/', async (request, response) => {
    try {
        const gasStations = await GasStationsDbReq.getAll();
        gasStations.sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
        });
        response.status(200).json({data: gasStations});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.get('/:id', async (request, response) => {
    try {
        const gasStation = await GasStationsDbReq.find(request.params.id);
        response.status(200).json({data: gasStation});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.post('/', async (request, response) => {
    try {
        const gasStationId = await GasStationsDbReq.create(request.body.name, request.body.address);
        response.status(200).json({data: gasStationId});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.put('/', async (request, response) => {
    try {
        const gasStationId = await GasStationsDbReq.update(request.body.id, request.body.name, request.body.address);
        response.status(200).json({data: gasStationId});
    } catch (error) {
        response.status(500).json({data: error});
    }
});

module.exports = router;