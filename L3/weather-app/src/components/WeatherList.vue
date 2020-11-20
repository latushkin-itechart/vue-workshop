<template>
  <v-row justify="center">
    <v-col cols="2" v-for="item in weatherList" :key="item.id">
      <WeatherCard :item="item"/>
    </v-col>
  </v-row>
</template>

<script>
import WeatherCard from "./WeatherCard";
import {mapGetters} from "vuex";
export default {
  name: "WeatherList",
  components: {WeatherCard},
  computed: {
    ...mapGetters(['weatherList'])
  }
}
</script>
