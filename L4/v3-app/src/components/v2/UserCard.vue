<template>
  <div class="user-card">
    <h4>{{ user.name }}</h4>
    <h5> Age: {{user.age}}. Position: {{user.jobTitle}}</h5>
    <p><b>Skills:</b> <span> {{skills}}</span></p>
    <button @click="removeUser">Delete</button>
  </div>
</template>

<script>

export default {
  name: "UserCard",
  props: {
    user: Object,
  },
  methods: {
    removeUser() {
      this.$emit('remove');
    }
  },
  computed: {
    skills() {
      return this.user.skills.join(', ');
    }
  }
}
</script>

<style lang="css">
.user-card {
  margin: 10px;
  border-radius: 3px;
  box-shadow: 2px 2px 4px #777;
  padding: 10px;
  background-color: #ffffff;

}
</style>