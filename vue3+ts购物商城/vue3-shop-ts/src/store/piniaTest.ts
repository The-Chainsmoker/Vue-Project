
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// defineStore(唯一id,函数||对象)

/* Option Store 语法 */
export const userStore = defineStore('use', {
    state: () => {
        return {
            name: 'smokers',
            age: 0
        }
    },
    getters: {
        addAge(state) {
            console.log('this:', this.age);
            return state.age + 2
        }
    },
    actions: {
        increment() {
            console.log('name:', this.name)
            this.age = this.age + 2
        }
    }
})


/* Setup Store 语法 */
/** 与 Option Store 语法区别: 
 * 使用  const store = useStore() 时,
 *   useStore 函数内部的第二个回调函数会执行一遍 ,
 *   并返回对象体: { age, addAge, increment }
 */
/* export const userStore = defineStore('use', () => {
    console.log("初次调用会执行一下代码!!!")
    const age = ref(0)

    const addAge = computed(() => {
        console.log('age:', age.value);
        return age.value + 2
    })
    
    function increment() {
        age.value = age.value + 2
    }

    return { age, addAge, increment }
}) */

