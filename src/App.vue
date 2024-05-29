<template>
  <div class="form-container">
    <form v-on:submit.prevent="stockInfo">
      <label for="symbol">Stock Symbol: </label>
      <input type="text" name="symbol" id="symbol" v-model="stockSymbol" />
      <button>Submit</button>
    </form>
    <div>
      <p>Symbol: {{ globalQuote.symbol }}</p>
      <p>Open: {{ globalQuote.open }}</p>
      <p>High: {{ globalQuote.high }}</p>
      <p>Low: {{ globalQuote.low }}</p>
      <p>Price: {{ globalQuote.price }}</p>
      <p>Volume: {{ globalQuote.volume }}</p>
      <p>Latest Trading Day: {{ globalQuote.latestTradingDay }}</p>
      <p>Previous Close: {{ globalQuote.previousClose }}</p>
      <p>Change: {{ globalQuote.change }}</p>
      <p>Change Percent: {{ globalQuote.percentageChange }}</p>
    </div>
    <!-- <div>{{globalQuote}}</div> -->
  </div>
</template>

<script>
import authService from "./services/AuthService";

export default {
  data() {
    return {
      stockSymbol: "",
      globalQuote: {
        symbol: "",
        open: "",
        high: "",
        low: "",
        price: "",
        volume: "",
        latestTradingDay: "",
        previousClose: "",
        change: "",
        percentageChange: ""
      }
    };
  },

  methods: {
    stockInfo() {  
      console.log("you have reached stockInfo method");
      authService.getStockInfo(this.stockSymbol).then((response) => {
        this.globalQuote.symbol = response.data["Global Quote"]["01. symbol"];
        this.globalQuote.open = response.data["Global Quote"]["02. open"];
        this.globalQuote.high = response.data["Global Quote"]["03. high"];
        this.globalQuote.low = response.data["Global Quote"]["04. low"];
        this.globalQuote.price = response.data["Global Quote"]["05. price"];
        this.globalQuote.volume = response.data["Global Quote"]["06. volume"];
        this.globalQuote.latestTradingDay = response.data["Global Quote"]["07. latest trading day"];
        this.globalQuote.previousClose = response.data["Global Quote"]["08. previous close"];
        this.globalQuote.change = response.data["Global Quote"]["09. change"];
        this.globalQuote.percentageChange = response.data["Global Quote"]["10. change percent"];
        console.log(response);
        console.log(this.globalQuote);
      });
    },
  },
};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* vh stands for viewport height */
}

.stock-table {
  background-color: #ffffff;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  overflow: hidden;
  text-align: left;
}
</style>
