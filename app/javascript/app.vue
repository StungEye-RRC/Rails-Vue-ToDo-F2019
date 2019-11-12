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
    </ol>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todos: [] 
    }
  },
  mounted: function () {
    const data_element = document.getElementById('todo-data');
    this.todos = JSON.parse(data_element.getAttribute('data-todos'));
  }
}
</script>

<style scoped>
</style>
