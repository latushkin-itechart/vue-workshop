export default {
  data() {
    return {
      log: {
        clicks: 0
      }
    }
  },
  methods: {
    logClick() {
      this.log.clicks ++;
    }
  }
}