<template>
  <v-app>
    <h3>Example 1: event bus usage</h3>
    <CoinsList/>
    <v-dialog max-width="50%" v-model="tickersVisible">
      <TickersList />
    </v-dialog>
  </v-app>
</template>

<script>
import CoinsList from "./components/CoinsList";
import TickersList from "./components/TickersList";
export default {
  name: "App.vue",
  components: {TickersList, CoinsList},
  data() {
    return {
      tickersVisible: false,
    }
  },
  methods: {
    showTickers() {
      this.tickersVisible = true;
    }
  },
  mounted() {
    this.$bus.$on('show-tickers', () => this.showTickers())
  }
}
</script>
