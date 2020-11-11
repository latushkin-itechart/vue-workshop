<template>
  <div>
    <h3>Search via v-model</h3>
    <SearchField v-model="query"/>

    <h3>Events emitting</h3>
    <ul class="list-group">
      <li is="TodoItem"
          v-for="item in searchedTodos"
          :key="item"
          :text="item"
          @remove="execRemove"
          @click="onItemClick"
      ></li>
    </ul>

    <h3> Synced prop</h3>
    <ul class="list-group">
      <TodoItemSynced
          :text.sync="todos[2]"
      />
    </ul>
  </div>

</template>

<script>
import TodoItem from "./TodoItem";
import TodoItemSynced from "./TodoItemSynced";
import SearchField from "./SearchField";

export default {
  name: "Ex3",
  components: {
    SearchField,
    TodoItemSynced,
    TodoItem,
  },
  data() {
    return {
      todos: ['Learn HTML', 'Learn CSS', 'Learn JS', 'Learn Vue'],
      query: ''
    }
  },
  computed: {
    searchedTodos() {
      return this.todos.filter((item) => item.toLowerCase().includes(this.query.toLowerCase()));
    }
  },
  methods: {
    execRemove(data) {
      this.todos = this.todos.filter((todo) => todo !== data.item);
    },
    onItemClick(event) {
      console.log(event);
    }

  }
}
</script>