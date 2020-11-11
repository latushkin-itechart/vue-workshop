<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>{{ name }} (Age: {{ age }})</h3>
      </div>
      <div class="card-text">
        <span> {{ jobTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCardSplittedPropsWithValidation",
  props: {
    name: String,
    age: {
      type: Number,
      default: 0
    },
    jobTitle: {
      type: String,
      default: () => 'No job title'
    }
  }
}
</script>