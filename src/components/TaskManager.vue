<template>
  <div>
      <!-- <h3>Task Manager</h3> -->
      <div v-bind:key="task.id" v-for="task in tasks">
          <Task v-bind:task="task" v-on:del-task="$emit('del-task', task.id)"/>
      </div>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
    components:{
        Task
    },
    name: "TaskManager",
    props: ["tasks"]
}
</script>

<style>

</style>