<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>{{ employee.name }} (Age: {{ employee.age }})</h3>
      </div>
      <div class="card-text">
        <span> {{ employee.jobTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Employee from "./Employee";

export default {
  name: "UserCardWithValidation",
  props: {
    employee: Employee
  }
}
</script>