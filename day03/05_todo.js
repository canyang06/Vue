Vue.component("todo",{
  template:`<div class="todo">
  <h1>事件代办清单:</h1>
  <todo-add></todo-add>
  <todo-list :tasks="tasks"></todo-list>
  </div>`,
  data(){
    return {
    tasks:["吃饭","睡觉","打亮亮"]
    }
  },
  components:{ todoAdd , todoList}
})