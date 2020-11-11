<template>
  <div>
    <p>This is a text in a simple paragpraph</p>
    <HelloWorld :class="helloWorldClass"/>
    <ListComponent></ListComponent>
    <GlobalComponent/>

    <hr/>


    <section>
      <h4>Component names must be written in PascalCase or in kebab-case</h4>
      <global-component align="center"></global-component>
    </section>

    <hr/>

    <section>
      <p>Show list 1 (v-if) <input type="checkbox" v-model="showList1"/> </p>
      <ListComponent v-if="showList1"/>
      <p>Show list 2 (v-show) <input type="checkbox" v-model="showList2"/> </p>
      <ListComponent v-show="showList2"/>
    </section>

    <hr/>

    <section>
      <p>Count of HelloWorlds: <input type="number" v-model.number="n" /> </p>
      <hello-world v-for="i in n" :key="i"></hello-world>
    </section>

    <hr/>

  </div>
</template>

<script>
import ListComponent from "./ListComponent";
import HelloWorld from "./HelloWorld";
export default {
  name: "Ex1",
  components: {
    HelloWorld,
    ListComponent
  },
  data() {
    return {
      n: 2,
      showList1: true,
      showList2: true,
      helloWorldClass: 'hello-world'
    }
  }
}
</script>
