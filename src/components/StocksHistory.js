export const StocksHistory = {
    /** gets stock OHLC prices for multiple stocks */
    getMultipleStocks: async () => {
        // getting prices of multiples stocks asynchronously
        const dataSources = [
            //await getAmazonStock(),
            await getGoogleStock(),
            // await getMicrosoftStock(),
            //await getTeslaStock()
        ];

        return new Promise((resolve, reject) => {
            resolve(dataSources);
        });
    }
};

/** gets Amazon stock OHLC prices from a .JSON file */
export const getAmazonStock = async () => {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    stockData.__dataIntents = {
        close: ["SeriesTitle/Amazon"]
    };

    return new Promise((resolve, reject) => {
        resolve(stockData);
    });
};

/** gets Tesla stock OHLC prices from a .JSON file */
export const getTeslaStock = async () => {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    stockData.__dataIntents = {
        close: ["SeriesTitle/Tesla"]
    };
    return new Promise((resolve, reject) => {
        resolve(stockData);
    });
};

/** gets Microsoft stock OHLC prices from a .JSON file */
export const getMicrosoftStock = async () => {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    stockData.__dataIntents = {
        close: ["SeriesTitle/Microsoft"]
    };
    return new Promise((resolve, reject) => {
        resolve(stockData);
    });
};

/** gets Google stock OHLC prices from a .JSON file */
export const getGoogleStock = async () => {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    stockData.__dataIntents = {
        close: ["SeriesTitle/Google"]
    };
    return new Promise((resolve, reject) => {
        resolve(stockData);
    });
};

export const convertData = (jsonData) => {
    let stockItems = [];

    for (let json of jsonData) {
        let parts = json.date.split("-"); // "2020-01-01"
        let item = new StockItem();
        item.date = new Date(parts[0], parts[1], parts[2]);
        item.open = json.open;
        item.high = json.high;
        item.low = json.low;
        item.close = json.close;
        item.volume = json.volume;
        stockItems.push(item);
    }

    return stockItems;
}

export class StockItem {
    constructor() {
        this.open = undefined;
        this.close = undefined;
        this.high = undefined;
        this.low = undefined;
        this.volume = undefined;
        this.date = undefined;
    }
}