<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" />
      <Footer :todos="todos" :clearList="clearList" />
    </div>
  </div>
</template>

<script lang="ts">
// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent, reactive, toRefs, ref, watch } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import { Todo } from '../src/type/todo'

//暴漏出去一个定义的组件
export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Header,
    List,
  },
  setup() {
    //reactive接收是一个
    //调用函数指定传入一个泛型对象,而且对象重写Todo接口
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: '奔驰', isCompleted: false },
        { id: 2, title: '雪佛兰', isCompleted: false },
        { id: 3, title: '宝马', isCompleted: false },
      ],
    })

    //添加数据的方法传给 子组件
    const addTodo = (item: Todo) => {
      state.todos.unshift(item)
    }

    const deleteTodo = (index: number) => {
      //找出那一项删除
      state.todos.splice(index, 1)
    }

    const clearList = () => {
      state.todos = state.todos.filter((item) => !item.isCompleted)
    }

    watch(
      //监听state里面的属性需要函数返回的形式
      () => state.todos,
      (newvlue) => {
        console.log('监听', newvlue)
        localStorage.setItem('todos_key', JSON.stringify(newvlue))
      },
      {
        deep: true,
      }
    )

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      clearList,
    }
  },
})
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
