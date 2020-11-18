<template>
  <v-app>
    <h3>Example 2: Vuex usage</h3>
    <CoinsList/>
    <v-dialog max-width="50%" v-model="tickersVisible">
      <TickersList v-if="tickersAvailable"/>
    </v-dialog>
  </v-app>
</template>

<script>
import CoinsList from "./components/CoinsList";
import TickersList from "./components/TickersList";
import {mapGetters} from "vuex";

export default {
  name: "App.vue",
  components: {TickersList, CoinsList},
  data() {
    return {
      tickersVisible: false,
    }
  },
  computed: {
    ...mapGetters(['tickersAvailable', 'currentTickers'])
  },
  watch: {
    tickersAvailable(v) {
      this.tickersVisible = v;
    },
    tickersVisible(v) {
      if (!v) {
        this.$store.commit('dropTickers')
      }
    }
  },
}
</script>
