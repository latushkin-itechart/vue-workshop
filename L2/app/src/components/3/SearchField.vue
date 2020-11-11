<template>
  <div class="card">
    <div class="card-text">
      <input type="text" class="w-100 d-block" v-model="internalValue" @input="$emit('input', internalValue)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchField",
  props: {
    value: '',
  },
  data() {
    return {
      internalValue: '',
    }
  },
  watch: {
    value() {
      this.internalValue = this.value;
    }
  }
}
</script>