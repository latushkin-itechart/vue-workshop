<template>
  <div>
    <input v-model="query" />
    <div>
      <item v-for="item in filteredItems"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ex0",
  data() {
    return {
      items: new Array(10),
      filteredItems: [],
      query: '',
    }
  },

  watch: {
    query() {
      this.filterItems(this.query);
    }
  },

  methods: {
    filterItems(query) {
      this.filteredItems = this.items.filter((item) => item.includes(query))
    },

    reloadItems() {
      API.load().then((data) => {
        this.items = data;
        this.query = '';
        this.filterItems('');
      })
    }
  }
}
</script>