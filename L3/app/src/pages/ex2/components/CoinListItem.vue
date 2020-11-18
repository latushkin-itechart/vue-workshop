<template>
  <div>
    <v-card>
      <v-card-title>
        <h4>{{ coin.name }}</h4>
      </v-card-title>
      <v-card-text>
        <v-btn small color="primary" outlined @click="loadMore" v-if="!coinData">Load more</v-btn>
        <v-btn small color="secondary" outlined @click="coinData = null" v-if="coinData">Hide</v-btn>
      </v-card-text>
      <CoinData :data="coinData" v-if="coinData"/>
    </v-card>
  </div>
</template>

<script>
import CoinData from "./CoinData";
import {mapActions} from "vuex";

export default {
  name: "CoinListItem",
  components: {CoinData},
  props: {
    coin: Object,
  },
  data() {
    return {
      coinData: null
    }
  },
  methods: {

    // Or
    ...mapActions(['loadMore']),


    loadMore() {
      this.$store.dispatch('loadMore', this.coin)
          .then((data) => {
            this.coinData = data;
          });
    },

  }
}
</script>
