const stocks = new Map();

class StockRepository {
    findBySymbol(symbol) {
        if (!stocks.has(symbol)) {
            stocks.set(symbol, new Map());
        }

        return stocks.get(symbol);
    }

    save(symbol,trade) {
        stocks.set(symbol, trade);
    }
}

module.exports = new StockRepository();
