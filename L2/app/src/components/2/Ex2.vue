<template>
  <div>
    <h3>Data binding</h3>
    <div class="row">

      <UserCard class="col-3" :employee="employee"/>

      <UserCardSplittedProps
          class="col-3"
          :name="employee.name"
          :age="employee.age"
          :job-title="employee.jobTitle"
      />

      <UserCardWithValidation :employee="employeeInstance"/>

      <UserCardSplittedPropsWithValidation
          class="col-3"
          :name="employeeInstance.name"
          :job-title="employeeInstance.jobTitle"
      />

      <UserCardSplittedPropsEditableAttempt

          class="col-3"
          :name="employees[2].name"
          :age="employees[2].age"
          :job-title="employees[2].jobTitle"
      />

    </div>

    <h3>Loop output with binding</h3>
    <div class="row">
      <UserCard
          class="col-3"
          v-for="employee in employees"
          :employee="employee"
          :key="employee.name"
      />
    </div>
  </div>
</template>

<script>
import UserCard from "./UserCard";
import data from './data';
import UserCardSplittedProps from "./UserCardSplittedProps";
import UserCardWithValidation from "./UserCardWithValidation";
import Employee from "./Employee";
import UserCardSplittedPropsWithValidation from "./UserCardSplittedPropsWithValidation";
import UserCardSplittedPropsEditableAttempt from "./UserCardSplittedPropsEditableAttempt";

export default {
  name: "Ex2",
  components: {
    UserCardSplittedPropsEditableAttempt,
    UserCardSplittedPropsWithValidation, UserCardWithValidation, UserCardSplittedProps, UserCard
  },
  data() {
    return {
      employee: data[0],
      employeeInstance: new Employee(data[1].name, data[1].age, data[1].jobTitle),
      employees: data,
    }
  }
}
</script>