<template>
  <div>
    <p>Name: {{ name }}</p>
    <p>Items: {{ items }}. First is {{ items[0] }}. Length is {{ items.length }}</p>
    <p>User was created at {{ createdAt }}. It was in {{ createdAt.getFullYear() }}</p>
    <p>User object is {{ user }}. This user is {{ user.age }} years old.</p>
    <hr/>
    <p>Count is {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "Example3_1",
  data() {
    return {
      name: 'John',
      items: [1, 2, 3, 4],
      createdAt: new Date(),
      user: {
        name: 'Alex',
        age: 15
      },
      interval: null,
      counter: 0,
    }
  },

  mounted() {
    this.interval = setInterval(() => {
      this.counter ++;
    }, 500)

  }
}
</script>
