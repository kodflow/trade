class Stock {
    constructor(symbol, price) {
        this.symbol = symbol;
        this.price = price;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }
}

module.exports = Stock;
