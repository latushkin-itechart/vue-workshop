<template>
  <div id="app">
    <v-app>
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <v-col cols="2">
            <v-card class="mx-auto" height="100vh">
              <v-navigation-drawer width="100%" permanent>
                <v-list nav>
                  <v-list-item link to="/">
                    <v-list-item-content>
                      <v-list-item-title>
                        Home
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link to="/about">
                    <v-list-item-content>
                      <v-list-item-title>
                        About
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link to="/users">
                    <v-list-item-content>
                      <v-list-item-title>
                        Users
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link to="/contact">
                    <v-list-item-content>
                      <v-list-item-title>
                        Contact Us
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link to="/additional">
                    <v-list-item-content>
                      <v-list-item-title>
                        Additional info
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-col>
          <v-col cols="10" class="pa-3">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
