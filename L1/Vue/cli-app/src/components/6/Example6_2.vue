<template>
  <div>
    <ul>
      <li v-for="n in 5" :key="n">
        Item # <b>{{ n }}</b>
      </li>
    </ul>
    <hr/>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <h3>[#{{ index+1 }}] <a :href="item.url">{{ item.name }}</a></h3>
        <p>Established in {{ item.year_established }}</p>
        <p>
          <button @click="selectItem(item)">Select item</button>
          <button @click="removeItem(item)">Remove item</button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
const API_URL = `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1`;
export default {
  name: "Example6_2",
  data() {
    return {
      items: []
    }
  },

  methods: {
    selectItem(item) {
      window.alert(`${item.name} selected!`);
    },
    removeItem(item) {
      this.items = this.items.filter((x) => x !== item);
    }

  },
  mounted() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          this.items = data;
        })
  }
}
</script>