<template>
  <header>
    <CustomSearchField v-model="searchQuery" />
  </header>
</template>

<script>
import CustomSearchField from "./CustomSearchField";
export default {
name: "ToolPanel",
  components: {CustomSearchField},
  data() {
    return {
      searchQuery: '',
    }
  },
  watch: {
    searchQuery(v) {
      this.$emit('search', v);
    }
  }
}
</script>