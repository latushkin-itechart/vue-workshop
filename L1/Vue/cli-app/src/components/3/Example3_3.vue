<template>
  <div>
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
    <p>Z: {{ z }}</p>
    <hr/>
    <p>X: {{ item.x }}</p>
    <p>Y: {{ item.y }}</p>
    <p>Z: {{ item.z }}</p>
  </div>
</template>

<script>
// See console errors
export default {
  name: "Example3_3",
  data: () => ({
    item: {}
  }),

  mounted() {
    setTimeout(() => {
      this.x = 'X';
      this.item.x = 'X';
    }, 1000);

    setTimeout(() => {
      this.y = 'Y';
      this.item.y = 'Y';
    }, 2000);

    setTimeout(() => {
      this.z = 'Z';
      this.item.z = 'Z';
    }, 3000);

  }
}
</script>