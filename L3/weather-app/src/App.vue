<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
        <Toolbar />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <LocationsList />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <WeatherList />
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>

import Toolbar from "./components/Toolbar";
import WeatherList from "./components/WeatherList";
import LocationsList from "./components/LocationsList";
export default {
  name: 'App',
  components: {
    LocationsList,
    WeatherList,
    Toolbar

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
