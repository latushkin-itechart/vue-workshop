<template>
  <div>
    <h2>App users</h2>
    <v-text-field v-model="query" />
    <v-row class="users-list">
      <v-col cols="2" v-for="user in visibleList" :key="user.id">
        <v-card>
          <v-card-title>
            <h4>{{ user.name }}  </h4>
          </v-card-title>
          <v-card-subtitle>
            <p><small> {{user.jobTitle}}</small></p>
          </v-card-subtitle>
          <v-card-actions>
            <router-link :to="`/users/${user.id}`">
              <v-btn text>Details</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import data from "../../include/users";
export default {
  name: "Users",
  data() {
    return {
      users: data,
      query: ''
    }
  },
  watch: {
    query() {
      const d = new Date();
      this.$logger.log('Computed array len: ' + this.visibleList.length);
      this.$logger.log('User sees now in DOM: ' + this.$el.querySelectorAll('.users-list > *').length );
      this.$nextTick().then(() => {
        this.$logger.log('User sees in DOM after tick update: ' + this.$el.querySelectorAll('.users-list > *').length + ' |  Updated in ' + (new Date() - d)  + ' ms.');
      })
    }
  },
  computed: {
    visibleList() {
      return this.users.filter(({name}) => new RegExp(this.query, 'gi').test(name));
    }
  },
  mounted() {
    this.disableUnmountLog();
    this.$logger.log('Users list mounted');
  }
}
</script>
