const express = require('express');
const stockController = require('./interfaces/http/stockController');
const { startWebSocketClient } = require('./infrastructure/web/websocketClient');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', stockController);

const symbols = ['AAPL'];

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    startWebSocketClient(symbols, (message) => {
       console.log('Received message:', message);
    });
});
