const { retrieveStockData } = require('../../application/useCases/retrieveStockData');

async function runCLI() {
    const symbol = process.argv[2];
    if (!symbol) {
        console.error('Please provide a stock symbol.');
        process.exit(1);
    }

    try {
        const data = await retrieveStockData(symbol);
        console.log(`Stock data for ${symbol}:`, data);
    } catch (error) {
        console.error(error.message);
    }
}

runCLI();
