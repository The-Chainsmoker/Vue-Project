import { observe } from "./observe/index";
export function initState(vm) {
  const opts = vm.$options;//获取所有的选项
  if (opts.data) {
    initData(vm);
  }

}

function proxy(vm, target, key) {
  //数据劫持相当于对象属性定义
  //如果属性之前有数据劫持,当前数据劫持返回值与之前的一样则原样输出
  Object.defineProperty(vm, key, {
    get() {
      return vm[target][key]
    },
    set(newValue) {
      vm[target][key] = newValue
    }
  })
}

function initData(vm) {
  let data = vm.$options.data //data可能是对象或函数
  data = typeof data === 'function' ? data.call(this) : data

  vm._data = data//每次调用函数都是新的返回值,需要保存当前data的返回值

  console.log('data', vm._data);

  //对数据进行劫持 vue2(观察者) 
  observe(data)

  //把data的属性放到实例上

  for (let key in data) {
    proxy(vm, '_data', key)
  }

  console.log('vm', vm);
}