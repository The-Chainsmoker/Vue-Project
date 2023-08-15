import { newArrayProto } from "./array"

class Observe {
  constructor(data) {
    //会出现枚举情况 (data.__ob__.__ob__.__ob__...)
    //data.__ob__ = this//这里this指向类的实例,data是对象

    //解决方法
    Object.defineProperty(data, '__ob__', {
      value: this,
      enumerable: false//不可枚举
    })

    if (Array.isArray(data)) {

      //需要保留数组原有的特性，并且可以重写部分方法，
      //执行部分的数组原型方法,
      data.__proto__ = newArrayProto


      //再监视每一项
      //设置数组的每一项，不需要每项都监视 (监视数组本身就可以了)
      //数组中的对象，可以监控到的变化
      this.observeArray(data)
    } else {//特别情况-->数组的的一项是对象时
      this.walk(data)
    }

    // this.walk(data)

  }
  //类里面定义的方法，最后放入自身的prototype里面去
  //对象劫持
  walk(data) {
    Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
  }
  //数组劫持
  observeArray(data) {
    data.forEach(item => observe(item))
  }
}

export function defineReactive(target, key, value) {//闭包 属性劫持

  //深度属性劫持
  observe(value)//递归操作 对象-->属性-->对象-->...

  Object.defineProperty(target, key, {
    get() {
      // console.log(target, key, value);
      console.log(key)
      console.log('get');
      return value
    },
    set(newValue) {
      console.log('set');

      if (newValue == value) return
      //当属性设置属性是对象或者是数组时
      observe(newValue)

      value = newValue
    }
  })
}

export function observe(data) {

  if (typeof data !== 'object' || data == null) {
    return //只对对象进行劫持
  }
  //如果一个对象被劫持过了,那就不需要再被劫持了(要判断一个对象是否被劫持过,可以增添一个实例,用实例来判断是否被劫持过)
  if (data.__ob__ instanceof Observe) {//说明对象被代理过
    return data.__ob__
  }

  //类中的方法内部如果含有this，它默认指向类的实例
  return new Observe(data)//一开始执行
}