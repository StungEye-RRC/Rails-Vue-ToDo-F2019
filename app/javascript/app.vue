<template>
  <div>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        <label>
          <input
            type="checkbox"
            v-model="todo.done"
          >
          <del v-if="todo.done">{{ todo.description }}</del>
          <span v-else>{{ todo.description }}</span>
        </label>
      </li>
      <input 
        ref="newItem" 
        v-model.trim="newToDo"
        @keyup.enter="createToDo"
        placeholder="New To Do Item"
        autofocus
      />
    </ol>
  </div>
</template>

<script>
import RailsAPI from "RailsApi.js";

export default {
  data: function () {
    return {
      newToDo: "",
      todos: []
    }
  },
  methods: {
    createToDo: async function() {
      const todo = await RailsAPI.createToDo(this.newToDo);
      this.todos.push(todo);
      this.newToDo = "";
    }
  },
  mounted: async function () {
    this.todos = await RailsAPI.getToDos(); 
  }
}
</script>

<style scoped>
</style>
