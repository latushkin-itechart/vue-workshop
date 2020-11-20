<template>
  <v-toolbar color="primary">
    <v-row no-gutters>
      <v-col cols="5">
        <v-text-field color="white" v-model="query"></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-btn color="secondary" @click="search">Search</v-btn>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.query);
    }
  }
}
</script>
