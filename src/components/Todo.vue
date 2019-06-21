<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index" @click="todoDone(index)">
      {{ index }} - {{ todo }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    todoDone(index) {
      console.log(index);
      // $emit emits an event from the child components to the parent components
      this.$emit("removeTodo", index);
    }
  }
};
</script>
