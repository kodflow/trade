const axios = require('axios');
const { apiKey } = require('../config');

async function getStockDataFromFinnhub(symbol) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
    const response = await axios.get(url);
    return {
        symbol: symbol,
        price: response.data.c,
    };
}

module.exports = { getStockDataFromFinnhub };
