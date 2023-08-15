//引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp, nextTick } from 'vue'
import App from './App.vue'

//创建应用实例对象————app(类似于之前Vue2中的vm,但app比vm更"轻")
const app = createApp(App)

app.mount('#app')

//挂载在vue实例
app.config.globalProperties.$http = () => {
  console.log('猪追着我哈哈')
}
