const {Router} = require('express');

const RefuelingOperationsDbReq = require('../persistence/refueling-operations');

const router = new Router();

router.get('/', async (request, response) => {
    try {
        const refuelingOperations = await RefuelingOperationsDbReq.getAll();
        response.status(200).json({data: refuelingOperations});
    } catch (error) {
        response.status(500).json({data: error});
    }
});
router.get('/:id', async (request, response) => {
    try {
        const refuelingOperation = await RefuelingOperationsDbReq.find(request.params.id);
        response.status(200).json({data: refuelingOperation});
    } catch (error) {
        response.status(500).json({data: error});
    }
});

module.exports = router;