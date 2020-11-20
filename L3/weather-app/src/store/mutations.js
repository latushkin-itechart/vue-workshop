export default {

  setSearchedLocations(state, list) {
    state.locations = list;
  },

  setCurrentCity(state, id) {
    state.currentCityId = id;
  },

  setCurrentWeather(state, data) {
    state.weathers = data;
  }
}