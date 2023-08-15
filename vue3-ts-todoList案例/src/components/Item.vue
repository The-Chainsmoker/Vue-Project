<template>
  <li @mouseenter="mouseHandle(true)" @mouseleave="mouseHandle(false)" :style="{backgroundColor:activeBackColor,color:activeColor}">
    <label>
      <!-- v-model="todo.isCompted" 也可以 -->
      <input type="checkbox" v-model="isCompleted" @click="chaneg" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="show" @click="deleteList">删除</button>
  </li>
</template>

<script lang='ts'>
import { computed, defineComponent, ref, watch } from 'vue'
import { Todo } from '../type/todo'

export default defineComponent({
  name: 'Item',
  props: {
    //as : 类型断言 --> 类型断言更像是类型的选择，而不是类型转换
    todo: {
      type: Object as () => Todo, // object必须是函数返回Todo接口才行
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const show = ref(false)
    const activeBackColor = ref('')
    const activeColor = ref('')
    function mouseHandle(state: boolean) {
      //鼠标进入
      if (state) {
        activeBackColor.value = 'pink'
        activeColor.value = 'green'
        show.value = true
      } else {
        //鼠标离开
        activeBackColor.value = 'white'
        activeColor.value = 'black'
        show.value = false
      }
    }

    function deleteList() {
      if (window.confirm('确定要删除吗')) {
        props.deleteTodo(props.index)
      }
    }

    //isComptete --> 换成 props.todo.isCompleted
    const isCompleted = computed({
      get() {
        //监听全选(单选不监听也行)
        return props.todo.isCompleted
      },
      set(val: boolean) {
        props.todo.isCompleted = val
      },
    })

    return {
      mouseHandle,
      activeBackColor,
      activeColor,
      show,
      deleteList,
      isCompleted,
    }
  },
})
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>