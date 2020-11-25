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

import {computed, ref} from "vue";
import usersData from "../include/users";
import {onMounted, watch} from "vue";
import UserCard from "./v3/UserCard";

export default {
  name: 'App',
  components: {
    UserCard

  },
  setup() {

    const initialUsers = ref(usersData)

    const users = ref([]);
    const getUsers = () => {
      users.value = initialUsers.value.slice(0);
    }

    onMounted(getUsers);


    const searchQuery = ref('');
    const reloadUsers = () => {
      users.value = initialUsers.value.filter(({name}) => new RegExp(searchQuery.value, 'gi').test(name));
    }
    watch(searchQuery, () => {
      reloadUsers();
    })


    const ageFilter = ref(0);
    const visibleUsers = computed(() => {
      return users.value.filter(({age}) => age > ageFilter.value);
    })
    const usersCount = computed(() => {
      return visibleUsers.value.length;
    })


    const onRemove = (item) => {
      initialUsers.value = initialUsers.value.filter((i) => i !== item);
      reloadUsers();
    }

    return {
      users,

      getUsers,
      searchQuery,
      reloadUsers,
      ageFilter,
      visibleUsers,
      usersCount,

      onRemove,
    }
  }
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
