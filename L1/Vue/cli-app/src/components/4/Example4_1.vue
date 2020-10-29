<template>
  <div>
    <p>Count is {{counter}}</p>
  </div>
</template>

<script>
export default {
  name: "Example4_1",
  data: () => ({
    counter: 0,
  }),

  methods: {
    getRandomValue() {
      return Math.ceil(Math.random() * 5)
    },
    updateCounter() {
      this.counter += this.getRandomValue();
    }
  },

  // Incorrect! Won't be visible into component code
  getRandomValue() {
    return 1;
  },

  mounted() {
    window.setInterval(() => this.updateCounter(), 500);
  }
}
</script>