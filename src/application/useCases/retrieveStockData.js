const StockService = require('../../domain/services/stockService');

async function retrieveStockData(symbol) {
    const stockService = new StockService();
    const stockData = await stockService.getStockData(symbol);
    return stockData || null; // Return null if no data is found
}

module.exports = { retrieveStockData };
