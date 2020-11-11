<template>
  <div>
    <h4>Refs example</h4>
    <ReferredComponent ref="component"> </ReferredComponent>
    <h6>A piece of text</h6>
    <p ref="paragraph">Lorem ipsum dolor sit amet</p>
  </div>
</template>

<script>
import ReferredComponent from "./ReferredComponent";
export default {
  name: "Ex4",
  components: {ReferredComponent},
  data() {
    return {
      name: 'Example 4',
    }
  },

  created() {
    console.group('Created');
    console.log(this.$parent);
    console.log(this.$root);
    console.log(this.$refs.component);
    console.log(this.$refs.paragraph);
    console.groupEnd();
  },

  mounted() {
    console.group('Mounted');
    console.log(this.$parent);
    console.log(this.$root);
    console.log(this.$refs.component);
    console.log(this.$refs.paragraph);
    console.groupEnd();

    this.$refs.component.sayHi();

    this.initObserver();
  },

  methods: {
    initObserver() {
      const observer = new MutationObserver(() => {
        console.log('Mutation!');
      })
      observer.observe(this.$refs.paragraph, {
        attributes: true,
      });
    }
  }
}
</script>