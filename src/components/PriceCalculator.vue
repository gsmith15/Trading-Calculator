<template>
  <label for="price">Entry Price: </label>
  <input type="text" name="price" id="price" v-model="entryPrice" />
  <p></p>
  <label for="size">Position Size: </label>
  <input type="text" name="size" id="size" v-model="positionSize" />
  <p>Your total buy in price is ${{ totalBuyInPrice }}</p>
  <label for="stop-loss">Stop Loss Total: </label>
  <input type="text" name="stop-loss" id="stop-loss" v-model="stopLossAmount" />
  <p></p>
  <label for="ratio">Risk/Reward Ratio 1: </label>
  <input type="text" name="ratio" id="ratio" v-model="riskRewardRatio" />
  <p></p>
  <button
    id="calculate-button"
    v-on:click="
      calculateTargetStopLossPrice();
      calculateProfitTarget();
    "
  >
    Calculate
  </button>
  <p>Your target profit price is ${{ this.profitTarget }}</p>
  <p>Your stop-loss is price ${{ this.stopLossPrice }}</p>
</template>

<script>
export default {
  data() {
    return {
      entryPrice: null,
      positionSize: null,
      riskRewardRatio: null,
      stopLossAmount: null,
      stopLossPrice: null,
      profitTarget: null,
    };
  },

  methods: {

  
  calculateTargetStopLossPrice() {
    this.stopLossPrice = this.entryPrice - this.calculateTargetLossAmount;
  },

  calculateProfitTarget() {
    //this.profitTarget = (this.entryPrice - this.stopLossPrice) + this.entryPrice * this.riskRewardRatio
    let lossPerShare = this.entryPrice - this.stopLossPrice;
    console.log(lossPerShare);
    let profitPerShare = lossPerShare * this.riskRewardRatio;
    console.log(profitPerShare);
    this.profitTarget = (profitPerShare + parseInt(this.entryPrice)).toFixed(2);
    console.log("this is the entry price ", this.entryPrice);
    console.log("this is the stop loss price ", this.stopLossPrice);
    console.log("this is the risk reward ratio ", this.riskRewardRatio);
  }
},

  computed: {
    totalBuyInPrice() {
      let price = this.entryPrice * this.positionSize;
      return price;
    },
    calculateTargetLossAmount() {
      let lossAmountPerShare = (
        this.stopLossAmount / this.positionSize
      ).toFixed(2);
      return lossAmountPerShare;
    },
  },
};
</script>

<style>
#button {
  padding-right: 10px;
}
</style>
