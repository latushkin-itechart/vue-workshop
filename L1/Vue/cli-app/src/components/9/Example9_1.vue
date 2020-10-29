<template>
  <div>
    <p><input v-model="query"/></p>
    <p>Totally {{itemsCount}} items found.</p>
    <ul>
      <li v-for="(item, index) in filteredItems" :key="item.id">
        <h3>[#{{ index + 1 }}] <a :href="item.url">{{ item.name }}</a></h3>
        <p>Established in {{ item.year_established }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

const API_URL = `https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1`;

export default {
  name: "Example9_1",
  data() {
    return {
      query: '',
      items: []
    }
  },

  computed: {
    itemsCount() {
      return this.filteredItems.length;
    },
    filteredItems() {
      return this.items.filter((item) => item.name.toLowerCase().includes(this.query.toLowerCase()));
    }
  },

  async mounted() {
    this.items = await fetch(API_URL).then((res) => res.json())
  }
}
</script>