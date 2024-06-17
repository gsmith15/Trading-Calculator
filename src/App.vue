<template>
  <div class="stock-quote">
    <global-quote />
  </div>
  <div class="calculator">
    <price-calculator />
  </div>
</template>

<script>
import Stockview from "./views/StockView.vue"
import GlobalQuote from "./components/GlobalQuote.vue"
import PriceCalculator from "./components/PriceCalculator.vue"

export default {
  components: {GlobalQuote, PriceCalculator}

};
</script>

<style>
.stock-quote {
  justify-content: center;
  align-items: center;
  margin-left: 40%;
  margin-right: 25%;
  margin-top: 10%;
  margin-bottom: -25%
}
.calculator {
  margin-top: 30%;
  margin-left: 40%;
  margin-right: 25%;

  height: 100vh; /* vh stands for viewport height */
}

td {
  font-family: Arial, Helvetica, sans-serif;
}
div {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
