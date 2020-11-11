<template>
  <li class="list-group-item">
    <input type="text" :value="text" @input="onUpdate">
    <button type="button" class="btn btn-danger btn-sm float-right" @click="onRemove">Remove</button>
  </li>
</template>

<script>
export default {
  name: "TodoItemSynced",
  props: {
    text: String,
  },
  methods: {
    onRemove() {
      this.$emit('remove', {item: this.text});
    },
    onUpdate(e) {
      const newValue = e.target.value;
      this.$emit('update:text', newValue);
    }
  }
}
</script>
