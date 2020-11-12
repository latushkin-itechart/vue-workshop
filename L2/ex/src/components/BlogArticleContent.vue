<template>
  <div class="content card">
    <div class="card-title">
      <slot name="header"></slot>
    </div>

    <div class="card-text">
      <slot></slot>
    </div>

    <div class="card-footer">
      <button type="button" class="btn btn-link" @click="$emit('back')">Back</button>
      <slot name="tools"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogArticleContent"
}
</script>

<style scoped>

</style>