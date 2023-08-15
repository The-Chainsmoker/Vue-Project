//重写数组的部分方法


let oldArrayProto = Array.prototype;//获取数组原型的

////不是拷贝,只是将参数对象挂载在新对象的原型上
export let newArrayProto = Object.create(oldArrayProto);

let methods = [//重写数组原型方法
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice'
]

methods.forEach(method => {
  newArrayProto[method] = function (...args) {//这里重写了数组的方法

    //切片方程:在不改动原函数的情况下，在函数前执行另一个函数
    let result = oldArrayProto[method].call(this, ...args)//内部调用原函数，函数的劫持

    console.log('method', method);

    //需要对新增的数据再次劫持
    //pop、unshift、reverse、sort...不是新加元素的方法,不需要重新劫持
    let ob = this.__ob__//这里的this指调用方法的数组的本身
    console.log('ob', ob);
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break;
      case 'splice'://调用splice方法, args传入前两个是位置、数量 arr.splice(1,0,'aa')
        inserted = args.slice(2)
      default:
        break;
    }
    console.log(inserted);//新增内容
    if (inserted) {
      //对新增的元素进行劫持
      ob.observeArray(inserted)
    }

    return result
  }
})