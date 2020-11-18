<template>
  <v-app>
    <h3>Example 3. Mixins</h3>
    <ContentComponent />
    <ImageComponent />
    <FormComponent />
  </v-app>
</template>

<script>
import ContentComponent from "./components/ContentComponent";
import ImageComponent from "./components/ImageComponent";
import FormComponent from "./components/FormComponent";
export default {
name: "App.vue",
  components: {FormComponent, ImageComponent, ContentComponent}
}
</script>

<style scoped>

</style>