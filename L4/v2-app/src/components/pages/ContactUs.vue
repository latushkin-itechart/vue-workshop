<template>
  <div>
    <v-card>
      <v-card-title>
        <h2>Contact Us</h2>
      </v-card-title>

      <v-card-text>
        <v-textarea placeholder="Your message" v-focus>

        </v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Send</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "ContactUs",
  directives: {
    focus: {
      inserted(el) {
        el.querySelector('textarea').focus();
      }
    }
  }
}
</script>