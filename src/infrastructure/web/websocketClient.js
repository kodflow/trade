const WebSocket = require('ws');
const { websocketUrl } = require('../config');
const StockDataService = require('../../application/services/stockDataService');

function startWebSocketClient(symbols) {
    const ws = new WebSocket(websocketUrl);

    ws.on('open', () => {
        symbols.forEach(symbol => {
            ws.send(JSON.stringify({ type: 'subscribe', symbol }));
        });
    });

    ws.on('message', (data) => {
        const message = JSON.parse(data);
        if (message.type === 'trade') {
            const stockDataService = new StockDataService();
            message.data.forEach(async (trade) => {
                await stockDataService.updateStockData(trade);
            });
        }
    });

    ws.on('close', () => console.log('WebSocket connection closed'));
    ws.on('error', (error) => console.error('WebSocket error:', error));
}

module.exports = { startWebSocketClient };
