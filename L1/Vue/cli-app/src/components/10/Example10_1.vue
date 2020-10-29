<template>
  <div>
    <p>
      <input v-model="query" />
    </p>
    <div v-if="results">
      <h4>Name: {{ results.name }} </h4>
      <p>Estimated age: {{results.age}}</p>
      <p><small>Total count: {{results.count}}</small></p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Example10_1",
  data() {
    return {
      query: '',
      results: null
    }
  },

  computed: {
    preparedSearchQuery() {
      return this.query.trim().toLowerCase();
    }
  },

  watch: {
    preparedSearchQuery(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }
      if (newValue.length > 2) {
        this.reloadData(newValue)
      }
    }
  },

  methods: {
    async reloadData(query) {
      this.results = await fetch(`https://api.agify.io/?name=${query}`).then((res) => res.json())
    }
  }
}
</script>