<template>
  <div>

    <v-card width="100%">
      <v-card-title class="d-block">
        <v-row>
          <v-col cols="auto">
            <img :src="currentUser.avatar"/>
          </v-col>
          <v-col cols="auto">
            <h3> {{ currentUser.name }}</h3>
            <h6>Age: {{ currentUser.age }}</h6>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p><small>{{ currentUser.jobTitle }}</small></p>

          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <h2>Key Skills:</h2>
        <v-list>
          <v-list-item v-for="sk in currentUser.skills" :key="sk">
            <v-list-item-title>{{ sk }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn link to="/users" color="primary" class="ma-2">Back</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import data from '../../include/users';

export default {
  name: "UserCard",
  data() {
    return {
      users: data,
    }
  },
  computed: {
    currentUser() {
      return this.users.find(({id}) => id === Number(this.$route.params.id));
    }
  },
  mounted() {
    this.disableUnmountLog();
  },
}
</script>