<template>
  <div>
    <h4>Referred component contents</h4>
  </div>
</template>

<script>
export default {
  name: "ReferredComponent",
  methods: {
    sayHi() {
      console.log('Hi!');
    }
  },
  mounted() {
    console.log(this.$parent.name);
  }
}
</script>
