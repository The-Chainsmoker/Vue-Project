export default {
  // 写法一
  // asyChange(context, payload) {
  //   setTimeout(() => {
  //     context.state.count++
  //     context.commit('change')
  //     console.log(payload.message)
  //   }, 1000)
  // }

  // 写法二:Promise
  asyChange(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.state.count++
        context.commit('change')
      }, 1000)
      resolve(payload.message)
    })
  }
}