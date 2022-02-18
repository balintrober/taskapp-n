<template>
  <div>
    <form @submit="addTask">
      <input type="text" v-model="title" name="title" placeholder="Add task" />
      <input type="submit" value="Add task">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name :"AddTask",
    data(){
        return{
            title: ''
        }
    },
    methods:{
        addTask(e){
            e.preventDefault();
            const task = {
                id: uuid.v4(),
                title: this.title,
                completed: false
            };
           // this.title = '';
            this.$emit('add-task', task);
        }
    }
};
</script>

<style>
</style>