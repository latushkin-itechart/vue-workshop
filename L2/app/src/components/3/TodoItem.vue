<template>
  <li class="list-group-item">
    <span> {{ text }}</span>
    <button type="button" class="btn btn-danger btn-sm float-right" @click="onRemove">Remove</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    text: String,
  },
  methods: {
    onRemove() {
      this.$emit('remove', {item: this.text});
    }
  }
}
</script>
