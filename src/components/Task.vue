<template>
  <div class="task-item" 
  v-bind:class="{'is-complete': task.completed}">
  <input type="checkbox" v-on:change="markComplete">
      {{task.title}}
      <button @click="$emit('del-task', task.id)">Delete Task</button>
  </div>
</template>

<script>

export default {
    name: "Task",
    props: ["task"],
    data(){
        return{
            t: this.task
        }
    },
    methods:{
        markComplete(){
            this.t.completed = !this.t.completed
        }
    }
}
</script>

<style scoped>
    .task-item{
        backface-visibility: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-complete{
        text-decoration: line-through;
    }
</style>