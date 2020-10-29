<template>
  <div>
    <p align="center">Lorem ipsum dolor sit amet consequetur</p>
    <p v-bind:align="'right'">Lorem ipsum dolor sit amet consequetur</p>
    <p v-bind:align="align">Lorem ipsum dolor sit amet consequetur</p>
    <p :align="align">Lorem ipsum dolor sit amet consequetur</p>
    <p :align="align" align="right">Lorem ipsum dolor sit amet consequetur</p>
    <hr/>
    <p :align="reactiveAlign" >Lorem ipsum dolor sit amet consequetur</p>
    <hr/>
    <p :[reactiveAttrName]="align">A paragraph with reactive attribute name</p>
  </div>
</template>

<script>
export default {
  name: "Example3_5",
  data: () => ({
    align: 'center',
    reactiveAlign: 'center',
    reactiveAttrName: ''
  }),

  mounted() {
    setInterval(() => {
      const x = Math.round(Math.random() * 2);
      this.reactiveAlign = ['left', 'right', 'center'][x]
    }, 300)

    setInterval(() => {
      const attrName = `data-${Math.round(Math.random() * 10 ** 5 + 10 ** 6 )}`;
      this.reactiveAttrName = attrName;
    }, 300)
  }
}
</script>
