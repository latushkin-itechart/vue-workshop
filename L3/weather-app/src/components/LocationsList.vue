<template>
  <v-list>
    <v-list-item v-for="item in list" :key="item.woeid" @click="onCityClick(item.woeid)">
      <v-list-item-content>
        <p>{{ item.title }}</p>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "LocationsList",
  computed: {
    list() {
      return this.$store.state.locations;
    }
  },

  methods: {
    onCityClick(id) {
      this.$store.dispatch('loadLocationWeather', id);
    }
  }
}
</script>