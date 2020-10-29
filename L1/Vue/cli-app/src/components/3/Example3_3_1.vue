<template>
  <div>
    <p>X: {{ item.x }}</p>
    <p>Y: {{ item.y }}</p>
    <p>Z: {{ item.z }}</p>
  </div>
</template>

<script>
export default {
  name: "Example3_3_1",
  data: () => ({
    item: {}
  }),

  mounted() {

    setTimeout(() => {
      this.$set(this.item, 'x', 'X');
    }, 1000);

    setTimeout(() => {
      this.$set(this.item, 'y', 'Y');
    }, 2000);

    setTimeout(() => {
      this.$set(this.item, 'z', 'Z');
    }, 3000);

  }
}
</script>