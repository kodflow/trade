require('dotenv').config();

module.exports = {
    apiKey: process.env.FINNHUB_API_KEY,
    websocketUrl: `wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`,
};
