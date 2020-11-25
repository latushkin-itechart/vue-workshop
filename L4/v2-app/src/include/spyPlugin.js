export default {

  install(Vue, options = {}) {

    let allowed = true;
    Vue.mixin({
      data() {
        return {
          log: {
            allowed: true,
            start: null
          }
        }
      },
      methods: {
        disableUnmountLog() {
          allowed = false;
        }
      },
      mounted() {
        this.log.start = new Date();
      },
      beforeDestroy() {
        const secs = (new Date() - this.log.start).toFixed(2);
        if (allowed) {
          console.log('Component was used for ' + secs + 's.');
        }
      }
    })

    Vue.prototype.$logger = {
      log(s) {
        console.log('%cSpyLogger%c %s', 'background-color: #000; color: #0f0; font-weight: bold; padding: 3px; border-radius: 2px','', s);
      }
    }
  }
}