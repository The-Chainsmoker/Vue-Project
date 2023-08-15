<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allCheck" />全选
    </label>
    <span>
      <span>已完成{{alreadySelect}}</span> / 全部{{allSelect}}
    </span>
    <button class="btn btn-danger" @click="clearSelect">清除已完成任务</button>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { Todo } from '../type/todo'
export default defineComponent({
  name: 'Footer',
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
    clearList: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    //简便写法式
    //已经选择
    let alreadySelect = computed(() => {
      return props.todos.reduce((pre, nows) => pre + (nows.isCompleted ? 1 : 0), 0)
    })

    //全部项
    let allSelect = computed(() => {
      return props.todos.reduce((pre) => {
        return pre + 1
      }, 0)
    })

    let allCheck = computed({
      get() {
        return alreadySelect.value > 0 && props.todos.length === alreadySelect.value
      },
      set(val: boolean) {
        props.todos.forEach((item) => (item.isCompleted = val))
      },
    })

    function clearSelect() {
      props.clearList()
    }

    return {
      alreadySelect,
      allSelect,
      allCheck,
      clearSelect,
    }
  },
})
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>