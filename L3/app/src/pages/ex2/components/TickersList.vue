<template>
  <v-card>
    <v-card-title>
      <h4>Tickers for {{ coin }}</h4>
    </v-card-title>
    <v-card-text>
      <v-data-table
          :items="tickers"
          :headers="['base', 'target', 'volume', 'last'].map(s => ({text: s, value: s})) "
        />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TickersList",
  computed: {
    coin() {
      return this.$store.state.currentTickers.name;
    },
    tickers() {
      return this.$store.getters.currentTickers;
    }
  }
}
</script>
