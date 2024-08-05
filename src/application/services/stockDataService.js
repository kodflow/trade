const StockService = require('../../domain/services/stockService');

class StockDataService {
    async updateStockData(trade) {
        const stockService = new StockService();
        stockService.updateStockPrice(trade);
    }
}

module.exports = StockDataService;
