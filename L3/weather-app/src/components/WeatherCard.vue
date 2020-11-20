<template>
  <v-card>
    <v-card-title class="d-block" >
      <h4 class="text-center">{{ cityName }}</h4>
    </v-card-title>

    <v-card-text>
      <p>{{ item.applicable_date }}</p>
      <h1>{{ item.the_temp }}</h1>
      <p>{{  item.humidity  }}%</p>
      <p>{{ item.wind_speed.toFixed(4) }} m/s</p>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    item: Object,
    city: String,
  },
  computed: {
    cityName() {
      return this.$store.getters.currentLocation.name;
    }
  }
}
</script>
