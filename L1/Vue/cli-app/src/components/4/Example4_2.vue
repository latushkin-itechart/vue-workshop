<template>
  <div>
    <p>Click count: {{ clickCount }}</p>
    <hr/>
    <p><button v-on:click="onElementClick">Click me!</button></p>
    <p><button v-on:click="onElementClick()">Click me!</button></p>
    <p><button @click="onElementClick($event)">Click me!</button></p>
    <p><button @click="onElementClick($event, {x: 1})">Click me!</button></p>

    <hr/>

    <p><button @click.once="onElementClick">Click will work only once</button></p>
    <p @click="onElementClick">
      <button @click.stop="onElementClick(null, null)">Click will stop propagation</button>
    </p>
    <p><a href="//google.com" @click.prevent="onElementClick(null)">Click me!</a></p>
    <p @click="onElementClick">
      <button @click.stop="void 0">Void stop propagation handler</button>
      <button @click.stop="() => {}">Void stop propagation handler</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Example4_2",
  data() {
    return {
      clickCount: 0
    }
  },
  methods: {
    onElementClick(ev, data = null) {
      this.clickCount ++;
      console.log(ev, data);
    }
  }
}
</script>