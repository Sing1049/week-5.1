<template>
  <div>
    <h1>Todo List</h1>
    <TodoForm @newTodo="addTodo">
      <h2 slot="title">Add a Todo</h2>
      <p slot="description">Enter what you wanna do today and Press Add :)</p>
    </TodoForm>
    <Todo :todos="todoList" @removeTodo="appDeleteTodo" />
  </div>
</template>
<script>
import Todo from "@/components/Todo.vue";
import TodoForm from "@/components/TodoForm.vue";
import axios from "axios";

export default {
  data() {
    return {
      todoList: []
    };
  },
  components: {
    Todo,
    TodoForm
  },
  methods: {
    appDeleteTodo(index) {
      this.todoList.splice(index, 1);
      axios.put(
        "https://sing1049-vue-and-axios.firebaseio.com/data.json",
        this.todoList
      );
      axios
        .put(
          "https://sing1049-vue-and-axios.firebaseio.com/data.json",
          this.todoList
        )
        .then(response => {
          console.log("your data was saved status :" + response.status);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addTodo(todo) {
      this.todoList.push(todo);
      axios
        .put(
          "https://sing1049-vue-and-axios.firebaseio.com/data.json",
          this.todoList
        )
        .then(response => {
          console.log(response);
          console.log("your data was saved status :" + response.status);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  created() {
    axios
      .get("https://sing1049-vue-and-axios.firebaseio.com/data.json")
      .then(response => {
        console.log(response.data);
        console.log("App started");
        if (response.data) {
          this.todoList = response.data;
        } else {
          this.todoList.push("I am a Demo");
        }
      })
      .catch();
  }
};
</script>
<style>
ul {
  list-style: none;
  width: 50%;
  margin: 0 auto;
  text-align: left;
}
ul li {
  border-left: 5px solid #61a8dc;
  padding: 10px 20px;
  font-size: 1.2rem;
}
ul li:nth-child(2n + 1) {
  border-left: 5px solid #f5876e;
}
</style>
