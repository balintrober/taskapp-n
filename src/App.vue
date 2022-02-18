<template>
  <Header />
  <AddTask v-on:add-task="addTask"/>
  <TaskManager v-bind:tasks="tasks" v-on:del-task="deleteTask" />
</template>

<script>
import Header from './components/Layout/Header.vue'
import AddTask from './components/AddTask.vue'
import TaskManager from './components/TaskManager.vue'

export default {
  
  components: {
    TaskManager,
    Header,
    AddTask 
  },
  data(){
    return{
      tasks: [
        {
          id: 1,
          title: "Task 1",
          completed: false
        },
        {
          id: 2,
          title: "Task 2",
          completed: false
        },
        {
          id: 3,
          title: "Task 3",
          completed: false
        }
      ],
    }
  },
    methods:{
      deleteTask(id){
        this.tasks = this.tasks.filter(
          task => task.id !== id
        )
      },
      addTask(task){
        this.tasks.push(task);
      }
    }
}
</script>

<style>
</style>
