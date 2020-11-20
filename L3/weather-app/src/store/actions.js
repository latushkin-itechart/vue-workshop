export default {

  search(ctx, query) {
    fetch(`https://www.metaweather.com/api/location/search/?query=${query}`)
      .then(res => res.json())
      .then((list) => {
        ctx.commit('setSearchedLocations', list);
      })
  },

  loadLocationWeather(ctx, id) {
    fetch(`https://www.metaweather.com/api/location/${id}/`)
      .then(res => res.json())
      .then((data) => {
        ctx.commit('setCurrentCity', id);
        ctx.commit('setCurrentWeather', data);
      })
  }

}