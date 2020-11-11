<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>{{ employee.name }} (Age: {{ employee.age}})</h3>
      </div>
      <div class="card-text">
        <span> {{ employee.jobTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ['employee']
}
</script>