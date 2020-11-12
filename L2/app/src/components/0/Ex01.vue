<template>
  <div>
    <input v-model="query"/>
    <div>
      <item v-for="item in filteredItems"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ex01",
  data() {
    return {
      items: [],
      query: ''
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.includes(this.query))
    }
  },
  methods: {
    reloadItems() {
      API.load().then((d) => {
        this.items = d;
        this.query = '';
      })
    }
  }
}
</script>