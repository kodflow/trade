const stockRepository = require('../repositories/stockRepository');

class StockService {
    async getStockData(symbol) {
        return stockRepository.findBySymbol(symbol);
    }

    updateStockPrice(trade) {
        const stock  = stockRepository.findBySymbol(trade.s);
        const metric = stock.get(trade.t) || {
            min: 0,
            max: 0,
            avg: 0,
            diff: 0,
            list: [],
        };

        console.log("in",stock)

        let min = trade.p;
        let max = trade.p;

        for (const element of metric.list) {
            if (element.p < trade.p) {
                min = element;
            }
            
            if (element.p > trade.p) {
                max = element;
            }
        }

        metric.list.push({
            p: trade.p,
            q: trade.v
        })

        metric.avg  = metric.list.reduce((acc, el) => acc + el.p, 0) / metric.list.length;

        metric.min  = min;
        metric.max  = max;
        metric.diff = max - min;

        stock.set(trade.t, metric);
        console.log("out",stock)
        stockRepository.save(stock);
    }
}

module.exports = StockService;
