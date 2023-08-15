import { initState } from './state'
import { compileToFunction } from './compiler';
export function initMixin(Vue) {
  //Vue.__proto__.init 不能指向new出来的对象的隐式原型
  //prototype是函数独有的
  Vue.prototype._init = function (options) {//用于初始化操作 
    console.log('options', options);

    //我们使用的vue的时候 $nextTick $data $attr ... 都是vue的属性
    const vm = this
    vm.$options = options//将用户的选项挂载到实例上

    //初始化状态
    initState(vm)

    //挂载
    if (options.el) {
      vm.$mount(options.el)//数据挂载 
    }
  }

  Vue.prototype.$mount = function (el) {
    const vm = this;
    el = document.querySelector(el);
    let ops = vm.$options
    if (!ops.rendenr) { //先查早render函数
      let template //在查找有template属性,没有template则采用外部的template
      if (!ops.template && el) {
        template = el.outerHTML//设置或获取位于对象起始和结束标签内的文本(包括自身)
        //innerHTML 设置或获取位于对象起始和结束标签内的 HTML (不包括自身)
      } else {
        if (el) {
          template = ops.template
        }
      }

      //有template属性
      console.log('template', template);

      //对模板编译
      const rendenr = compileToFunction(template)
      ops.rendenr = rendenr //最终会被编译成h('xxx')
    }

    ops.rendenr; //最终获取rendenr方法

    //script 标签引用的vue.global.js这个编译过程是在浏览器运行的
    //runtime是不包含模板编译的, 整个编译是打包的时候通过loader来转义.vue文件的, 用runtime的时候不能使用template
  }
}