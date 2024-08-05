const Stock = require('../models/stock');
const stockRepository = require('../repositories/stockRepository');

class StockService {
    async getStockData(symbol) {
        return stockRepository.findBySymbol(symbol);
    }

    updateStockPrice(trade) {
        const stock = stockRepository.findBySymbol(trade.s);
        const range = stock.get(trade.t) || []
            stock.set(trade.t, [...range, trade.p]);
            
            stockRepository.save(stock);
    }
}

module.exports = StockService;
