<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" v-for="coin in coinsList" :key="coin.id">
        <CoinListItem :coin="coin" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CoinListItem from "./CoinListItem";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "CoinsList",
  components: {CoinListItem},

  computed: {
    ...mapGetters(['coinsList']),
    // OR
    list() {
      return this.$store.getters.coinsList;
    }
  },

  methods: {
    ...mapActions(['loadCoins'])
  },

  mounted() {
    // this.$store.dispatch('loadCoins'); if no mapActions provided
    this.loadCoins();
  }
}
</script>
