class StockEvent {
    constructor(symbol, price) {
        this.symbol = symbol;
        this.price = price;
        this.timestamp = new Date();
    }
}

module.exports = StockEvent;
