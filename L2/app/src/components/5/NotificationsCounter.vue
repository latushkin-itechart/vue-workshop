<template>
  <button type="button" class="btn btn-outline-dark">
    <slot></slot>
    <span class="badge badge-primary">
      <slot name="badge"></slot>
    </span>
  </button>
</template>

<script>
export default {
name: "NotificationsCounter"
}
</script>

<style scoped>

</style>