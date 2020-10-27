<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path">{{route.meta.title}}</router-link>
        </li>
      </ul>
    </nav>
    
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    console.log(this.$router);
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Roboto, Segoe UI;
}
#app {
  display: flex;
  align-items: stretch;
}
#app nav {
  width: 25%;
  height: 100vh;
  overflow: auto;
  background-color: #efefef;
}
#app nav ul {
  display: block;
  margin: 0;
  padding: 0;
}
#app nav ul li {
  display: block;
}
#app nav ul li a {
  display: block;
  text-decoration: none;
  color: dodgerblue;
  padding: 1rem 1.5rem;
}
#app nav ul li a:hover {
  background-color: #ffffff
}
#app main {
  width: 75%;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  padding: 2rem;
}

</style>
