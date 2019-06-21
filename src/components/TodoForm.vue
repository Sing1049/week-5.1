<template>
  <div class="card">
    <slot name="title"></slot>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo">
      <button type="submit" name="button">Add</button>
    </form>
    <br>
    <slot name="description"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
    newTodo: "",
  };
},
methods: {
  addTodo(){
    if(this.newTodo.length){
      this.$emit("newTodo", this.newTodo);
      this.newTodo = "";
    }else{
      alert("Please Enter Soemthing!")
    }
  }
}
}
</script>

<style >
input{
  min-width: 200px;
  padding:10px 20px;
  font-size:1.5rem;
}
button{
  padding:10px 20px;
  font-size:1.5rem;
}
</style>
