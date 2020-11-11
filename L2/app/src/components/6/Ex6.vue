<template>
  <div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" @click="currentPage = 'home'">Home page</button>
      <button type="button" class="btn btn-primary" @click="currentPage = 'about'">About us</button>
      <button type="button" class="btn btn-primary" @click="currentPage = 'contacts' ">Contacts</button>
    </div>

    <div class="contents">
      <h3>Contents: </h3>
      <AsyncHome v-if="currentPage === 'home'" />
      <AsyncAbout v-if="currentPage === 'about'" />
      <Contacts v-if="currentPage === 'contacts'" />
    </div>
  </div>
</template>

<script>

import AsyncHome from "./AsyncHome";
import AsyncAbout from "./AsyncAbout";
import Contacts from "./Contacts";

export default {
  name: "Ex6",
  components: {
    AsyncHome,
    AsyncAbout,
    Contacts,
  },
  data() {
    return {
      currentPage: null
    }
  }
}
</script>