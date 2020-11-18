<template>
  <div @click="logClick">
    <v-card>
      <v-card-text>
        <v-text-field label="Message title" v-model="message.title"/>
        <v-textarea label="Your message" v-model="message.text"/>
        <v-btn color="primary">Submit</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ClickWatchMixin from "../mixins/ClickWatchMixin";

export default {
  name: "FormComponent",
  data() {
    return {
      message: {
        title: '',
        text: '',
      }
    }
  },
  mixins: [ClickWatchMixin]
}
</script>
