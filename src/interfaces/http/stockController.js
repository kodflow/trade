const express = require('express');
const { retrieveStockData } = require('../../application/useCases/retrieveStockData');

const router = express.Router();

router.get('/stocks/:symbol', async (req, res) => {
    try {
        const data = await retrieveStockData(req.params.symbol);
        res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
