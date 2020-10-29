<template>
  <div>
    <p class="red" :class="['big', 'underline']">Text with binded classes</p>
    <p :class="{underline: true, big: false, filled: isFilled}" @click="isFilled = !isFilled">Click me to toggle fill!</p>
    <p :class="isEnabled ? 'green' : 'red'" @click="isEnabled = !isEnabled"> {{ isEnabled ? 'ON' : 'OFF' }}. Click to toggle </p>
  </div>
</template>

<script>
export default {
  name: "Example7_2",
  data() {
    return {
      isFilled: false,
      isEnabled: true,
    }
  }
}
</script>


<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.big {
  font-size: 24px;
}
.underline {
  text-decoration: underline;
}
.filled {
  background-color: yellow;
}
</style>