export default {

  weatherList(state) {
    return state.weathers.consolidated_weather;
  },

  currentLocation(state) {
    return state.locations.find(({woeid}) => woeid === state.currentCityId);
  }
}