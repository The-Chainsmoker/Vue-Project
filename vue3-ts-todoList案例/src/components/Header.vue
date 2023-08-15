<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="text" @keyup.enter="add" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Header',
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // console.log(props.addTodo)
    const text = ref('') //通过value调用

    const add = () => {
      let title = text.value
      if (!title.trim()) return

      const todo = {
        id: Date.now(),
        title,
        isCompleted: false,
      }

      //使用父组件的函数,该函数是定义在父组件里的可以使用父组件的数据
      props.addTodo(todo)

      text.value = ''
    }
    return {
      add,
      text,
    }
  },
})
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>