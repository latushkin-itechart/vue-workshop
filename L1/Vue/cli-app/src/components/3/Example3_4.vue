<template>
  <div>
    <h3>User greeting</h3>
    <p>{{message}}</p>
    <hr/>
    <p v-html="message"></p>
  </div>
</template>

<script>
export default {
  name: "Example4",
  data: () => ({
    message: 'Hello, my name is <b>Alex!</b>',
  }),
}
</script>