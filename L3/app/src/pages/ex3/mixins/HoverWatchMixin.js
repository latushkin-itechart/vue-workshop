export default {
  data() {
    return {
      name: 'Unknown',
      log: {
        mouseEnters: 0
      }
    }
  },
  methods: {
    logMouseEnter() {
      this.log.mouseEnters += 1;
    }
  },

  mounted() {
    console.log('Hover detection activated for component ' + this.name);
  }
}