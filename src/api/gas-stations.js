const {Router} = require('express');

const GasStationsDbReq = require('../persistence/gas-stations');

const router = new Router();

router.get('/', async (request, response) => {
    try {
        const gasStations = await GasStationsDbReq.getAll();
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

module.exports = router;