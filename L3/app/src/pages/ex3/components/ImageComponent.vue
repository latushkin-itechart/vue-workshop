<template>
  <div @mouseenter="logMouseEnter" @click="logClick">
    <v-card>
      <v-card-text>
        <img
            width="400"
            src="https://images.unsplash.com/photo-1605639544011-2ce1b778475c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HoverWatchMixin from "../mixins/HoverWatchMixin";
import ClickWatchMixin from "../mixins/ClickWatchMixin";

export default {
  name: "ImageComponent",
  data() {
    return {
      name: 'ImageComponent'
    }
  },
  mixins: [HoverWatchMixin, ClickWatchMixin],

}
</script>
