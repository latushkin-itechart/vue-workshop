<template>
  <div class="card m-4">
    <div class="card-title">
      <h4>{{  item.title }}</h4>
    </div>

    <div class="card-text">
      <p> {{ item.description }}</p>

      <p>{{new Date(item.published_at).toLocaleDateString()}}</p>
      <div class="row">
        <div class="col-6">
          <span>Views: {{  item.views }}</span>
        </div>
        <div class="col-6 text-right">
          <button type="button"
                  class="btn btn-sm"
                  :class="item.userLiked ? 'btn-primary' : 'btn-outline-primary'"
                  @click="$emit('toggleLike')"
          >
            Likes
            <span class="badge badge-success" >{{  item.likes + Number(item.userLiked) }}</span>
          </button>
          <button class="btn btn-link btn-sm" @click="$emit('open')">Read more...</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>