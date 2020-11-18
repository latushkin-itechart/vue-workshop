<template>
  <div @mouseenter="logMouseEnter">
    <v-card>
      <v-card-title>
        <h3>Component with header</h3>
      </v-card-title>
      <v-card-text>
        Ullamcorper quis parturient parturient vitae consectetur vestibulum urna sed parturient class enim scelerisque
        non
        consectetur odio at a sapien conubia a eu.Hendrerit metus magnis parturient mattis leo pulvinar rhoncus et justo
        diam cursus conubia ut magna adipiscing aliquet ante at tellus at facilisis.Magnis quisque mi sagittis nisi
        fringilla viverra vestibulum magnis eros suscipit dui auctor enim eu suspendisse scelerisque.Nisl vestibulum
        curabitur velit maecenas sem commodo cum.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HoverWatchMixin from "../mixins/HoverWatchMixin";

export default {
  name: "ContentComponent",
  mixins: [HoverWatchMixin],
  mounted() {
    console.log('Content component was mounted!')
  }
}
</script>
