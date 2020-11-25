<template>
  <div>
    <div class="filters">
      <input type="text" v-model="searchQuery" />
      <span>Age, min: </span>
      <input type="number" v-model="ageFilter" />
      <h3>Total: {{ usersCount }}</h3>

    </div>

    <div>
      <UserCard v-for="item in visibleUsers" :key="item.id" :user="item" @remove="onRemove(item)"/>
    </div>
  </div>
</template>

<script>

import usersData from "../include/users";
import UserCard from "./v2/UserCard";

export default {
  name: 'App',
  components: {
    UserCard
  },
  data() {
    return {
      initialUsers: usersData,
      users: [],
      searchQuery: '',
      ageFilter: 0,
    }

  },

  watch: {
    searchQuery() {
      this.reloadUsers();
    }
  },

  computed: {
    visibleUsers() {
      return this.users.filter(({age}) => age > this.ageFilter);
    },

    usersCount() {
      return this.visibleUsers.length;
    }
  },

  methods: {
    getUsers() {
      this.users = this.initialUsers.slice(0);
    },

    reloadUsers() {
      this.users = this.initialUsers.filter(({name}) => new RegExp(this.searchQuery, 'gi').test(name))
    },

    onRemove(item) {
      this.initialUsers = this.initialUsers.filter((i) => i !== item);
      this.reloadUsers();
    }
  },

  mounted() {
    this.getUsers();
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: Roboto, sans-serif;
  background-color: #efefef;
}
.filters {
  display: flex;
  align-items: center;
}
.filters > * {
  margin: 10px;
}
.filters input {
  padding: 7px 10px;
  font-family: inherit;
}
</style>
