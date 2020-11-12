<template>
  <div>
    <input type="text" class="d-block w-100" v-model="internalValue" />
  </div>
</template>

<script>
export default {
  name: "CustomSearchField",
  data() {
    return {
      internalValue: '',
    }
  },
  props: {
    value: String,
  },
  watch: {
    value(v) {
      this.internalValue = v;
    },
    internalValue(v) {
      this.$emit('input', v);
    }
  }
}
</script>

<style scoped>

</style>