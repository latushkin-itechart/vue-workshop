<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" v-for="coin in list" :key="coin.id">
        <CoinListItem :coin="coin" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CoinListItem from "./CoinListItem";
export default {
  name: "CoinsList",
  components: {CoinListItem},
  data() {
    return {

    }
  },
  computed: {
    list() {
      return this.$bus.coins.slice(400, 900);
    }
  },

  mounted() {
    this.$bus.loadCoins();
  }
}
</script>
