<template>
  <div>
    &copy; {{ name }} {{ new Date().getFullYear() }}
  </div>
</template>

<script>
export default {
  name: "Copyright",
  props: {
    name: String
  }
}
</script>
