import vue from 'vue'
import Toast from './Toast'

let obj = {}

obj.install = (vue) => {
  let toastConstructor = vue.extend(Toast)

  let toastExample = new toastConstructor()

  toastExample.$mount(document.createElement('div'))

  document.body.appendChild(toastExample.$el)

  vue.prototype.$toast = toastExample
}

export default obj
