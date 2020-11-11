<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>{{ name }} (Age: {{ age}})</h3>
      </div>
      <div class="card-text">
        <span> {{ jobTitle }}</span>
        <button class="btn btn-primary" @click="age = age + 1">Add age</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCardSplittedPropsEditableAttempt",
  props: ['name', 'age', 'jobTitle']
}
</script>