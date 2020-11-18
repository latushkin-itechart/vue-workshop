import Vue from 'vue'

export default new Vue({

  data: {
    coins: [],
    currentTickers: null
  },

  methods: {

    loadCoins() {
      fetch(`https://api.coingecko.com/api/v3/coins/list`)
        .then((res) => res.json())
        .then((list) => {
          this.coins = list;
        })
    },

    loadMore({id}) {
      return fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.coins.find((coin) => coin.id === id).data = data;
          return data;
        })
    },

    showTickers({id}) {
      fetch(`https://api.coingecko.com/api/v3/coins/${id}/tickers`)
        .then((res) => res.json())
        .then((data) => {
          this.currentTickers = data;
          this.$emit('show-tickers')
        })
    }
  }

})