import axios from "axios";

export default {
  getStockInfo(stockSymbol) {
    console.log("you have reached get stock info service")
    
    return axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=XD9IDRK1K5H37OHT");
  }
}
