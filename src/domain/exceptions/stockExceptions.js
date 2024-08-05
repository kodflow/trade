class StockNotFoundException extends Error {
    constructor(symbol) {
        super(`Stock with symbol ${symbol} not found`);
        this.name = "StockNotFoundException";
    }
}

module.exports = { StockNotFoundException };
