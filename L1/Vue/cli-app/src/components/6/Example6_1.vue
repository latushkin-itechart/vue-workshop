<template>
  <div>
    <button @click="display = !display">
      <span v-if="display">Hide</span>
      <span v-else>Show</span>
      horizontal rule
    </button>
    <hr v-show="display"/>
  </div>
</template>

<script>
export default {
  name: "Example6_1",
  data() {
    return {
      display: true,
    }
  }
}
</script>