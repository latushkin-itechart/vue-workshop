<template>
  <v-card-text>
    <img :src="data.image.small" width="50"/>
    <p>
      {{data.description.en}}
    </p>
    <p>
      <v-btn small outlined @click="showTickers">Show Tickers</v-btn>
    </p>
  </v-card-text>
</template>

<script>
export default {
  name: "CoinData",
  props: {
    data: Object,
  },
  methods: {
    showTickers() {
      this.$bus.showTickers(this.data);
    }
  }
}
</script>
