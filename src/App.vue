<template>
  <div class="form-container">
    <form v-on:submit.prevent="stockInfo">
      <label for="symbol">Stock Symbol: </label>
      <input type="text" name="symbol" id="symbol" v-model="stockSymbol" />
      <button id="button" v-on:click=showQuoteWithClick>Submit</button>
    </form>
    <td class="global-quote" v-show=showQuote>
      <tr>Symbol: {{ globalQuote.symbol }}</tr>
      <tr>Open: {{ globalQuote.open }}</tr>
      <tr>High: {{ globalQuote.high }}</tr>
      <tr>Low: {{ globalQuote.low }}</tr>
      <tr>Price: {{ globalQuote.price }}</tr>
      <tr>Volume: {{ globalQuote.volume }}</tr>
      <tr>Latest Trading Day: {{ globalQuote.latestTradingDay }}</tr>
      <tr>Previous Close: {{ globalQuote.previousClose }}</tr>
      <tr>Change: {{ globalQuote.change }}</tr>
      <tr>Change Percent: {{ globalQuote.percentageChange }}</tr>
  </td>
  </div>
  <form v-on:submit.prevent="stockInfo">
      <label for="symbol">Entry Price: </label>
      <input type="text" name="price" id="price" v-model="entryPrice" />
      <label for="symbol">Position Size: </label>
      <input type="text" name="price" id="price" v-model="positionSize" />
      <label for="symbol">Risk/Reward Ratio 1: </label>
      <input type="text" name="ratio" id="ratio" v-model="riskRewardRatio" />
      <button id="button" v-on:click=showQuoteWithClick>Calculate</button>
    </form>
 
</template>

<script>
import authService from "./services/AuthService";

export default {
  data() {
    return {
      entryPrice: 0,
      positionSize: 0,
      riskRewardRatio: 0,
      showQuote: false,
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
    showQuoteWithClick(){
      this.showQuote=true;
    }
  },

  computed: {
    calculateProfitTarget(){
      let profitTarget = 0;
      return profitTarget;
    }
  }

};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* vh stands for viewport height */
}

.global-quote {
  background-color: #50C878	;
  border-collapse: collapse;
  padding: 10px 10px 10px 10px;
  margin-left: 10px;
  border-radius: 10px;

}

#button {
  padding-right: 10px;
}

td{
  font-family: Arial, Helvetica, sans-serif;
}
div{
  font-family: Arial, Helvetica, sans-serif;
}

</style>
