class StockSymbol {
    constructor(symbol) {
        if (!this.isValid(symbol)) {
            throw new Error(`Invalid stock symbol: ${symbol}`);
        }
        this.symbol = symbol;
    }

    isValid(symbol) {
        return typeof symbol === 'string' && symbol.length > 0;
    }
}

module.exports = StockSymbol;
