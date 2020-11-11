<template>
	<div class="container">
    <div class="row">
      <div class="col-8">
        <h2>Search in list</h2>
        <div class="form-group">
          <input class="form-control form-control-lg"
                type="text"
                placeholder="type a value..."
                v-model="search">
        </div>
      </div>
    </div>
		<div class="row">
			<div class="col-8">
				<h2>TODO List</h2>
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Completed</th>
							<th scope="col">
                <button class="btn btn-info" @click="addNew">Add new +</button>
              </th>
						</tr>
					</thead>
					<tbody>
						<tr class="tab-row" :class="[todo.completed? 'table-success' : 'table-default']"
                v-for="(todo, index) in seachResults"
                :key="todo.id"
                v-show="isShowOnList(index)">
							<th scope="row">
                <a href="" @click.prevent="editTodo(todo)">{{todo.title}}</a>
              </th>
							<td>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox"
                        class="custom-control-input"
                        :id="`ch${todo.id}`"
                        v-model="todo.completed">
                  <label class="custom-control-label" :for="`ch${todo.id}`">
                    {{todo.completed ? 'Done!': 'Not completed' }}
                  </label>
                </div>
              </td>
							<td>
                <button class="btn btn-danger del-btn" @click="removeTodo(todo.id)">x</button>
              </td>
						</tr>
					</tbody>
				</table>
        <div v-if="pages">
          <ul class="pagination pagination-sm">
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
            </li>
            <li class="page-item"
                v-for="i in pages"
                :key="i"
                :class="{'active': i == currentPage}">
              <a class="page-link" href="#" @click.prevent="currentPage = i">{{i}}</a>
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
            </li>
          </ul>
        </div>
        <span v-else>No results</span>
			</div>
			<div class="col-4" v-if="selectedTodo">
				<h2>Selected TODO</h2>
				<div class="card border-secondary mb-3" style="max-width: 20rem;">
					<div class="card-header">Editing form</div>
					<div class="card-body">
            <div class="form-group">
              <label class="col-form-label" for="inputDefault">Title</label>
              <input type="text"
                    class="form-control"
                    placeholder="Default input"
                    v-model="selectedTodo.title"
                    >
              <br>
              <div class="custom-control custom-checkbox">
                <input type="checkbox"
                      class="custom-control-input"
                      id="ch-new"
                      v-model="selectedTodo.completed">
                <label class="custom-control-label" for="ch-new">
                  Done
                </label>
              </div>
              <br>
              <div>
                <button class="btn btn-warning col-12" @click="closeEditing">Save & close</button>
              </div>
            </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import API from '@/api/api';

export default {
	name: 'Lesson1',

	data: () => ({
    todos: null,
    search: null,
    currentPage: null,
    selectedTodo: null,
	}),

	computed: {
    seachResults() {
      if (!this.search) {
        return this.todos;
      }
      return this.todos.filter((item) => item.title.includes(this.search));
    },
    pages() {
      return this.seachResults ? Math.ceil(this.seachResults.length / 10) : 1;
    },
	},

	mounted() {
		this.getTodoList();
  },

  watch: {
    search(newV, oldV) {
      if (newV && newV !== oldV) {
        this.currentPage = 1;
      }
    },
  },

	methods: {
    addNew() {
      this.todos.push({
        id: this.todos[this.todos.length - 1].id + 5,
        title: '',
        completed: false,
      });
      this.selectedTodo = this.todos[this.todos.length - 1];
    },

    editTodo(todo) {
      this.selectedTodo = todo;
    },

    removeTodo(id) {
      this.todos.forEach((el, i) => {
        if (el.id === id) {
          this.todos.splice(i, 1);
        }
      });
    },

    closeEditing() {
      this.selectedTodo = null;
    },

    nextPage() {
      if (this.currentPage < this.pages) this.currentPage += 1;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage -= 1;
    },

    isShowOnList(index) {
      const minIndex = this.currentPage * 10 - 10;
      const maxIndex = this.currentPage * 10;
      return index >= minIndex && index < maxIndex;
    },

    async getTodoList() {
      const data = await API.getTodoList();
      if (data.length) {
        this.todos = data;
        this.currentPage = 1;
      }
    },
	},
};
</script>

<style scoped>
.tab-row .del-btn {
  padding: 0;
  height: 25px;
  width: 25px;
  display: none;
}
.tab-row:hover .del-btn {
  display: block;
}
</style>
