<template>
  <div>
    <p>
      <input type="text" v-model="searchQuery" /> Entered {{ searchQuery.length }} symbols
    </p>
    <p>
      <input type="checkbox" v-model="singleCheckbox"/> {{ singleCheckbox }}
    </p>
    <hr/>
    <div>
      <p><input type="radio" name="country" value="UK" v-model="country"/> UK </p>
      <p><input type="radio" name="country" value="US" v-model="country"/> US </p>
      <p><input type="radio" name="country" value="HU" v-model="country"/> HU </p>
      <p><input type="radio" name="country" value="BY" v-model="country"/> BY </p>
      <p>Selected: {{ country }}</p>
    </div>
    <p>
      <input type="text" v-model="ping" @input="pingInput"/> Enter symbols and see console
    </p>
  </div>
</template>

<script>
export default {
  name: "Example8_1",
  data() {
    return {
      searchQuery: '',
      ping: '',
      singleCheckbox: false,
      country: 'BY'
    }
  },
  methods: {
    pingInput() {
      console.log('Input ping! ' + this.ping)
    }
  },
  mounted() {
    setInterval(() => {
      this.searchQuery = this.searchQuery.length ? this.searchQuery.slice(0, this.searchQuery.length - 1) : '';
    }, 500)
  }
}
</script>