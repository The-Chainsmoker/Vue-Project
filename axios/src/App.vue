<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { request } from './network/request'
export default {
  name: 'App',
  components: {},
  created() {
    //调用四
    request({ url: '/home/multidata' }).then((res) => {
      console.log(res)
    })
    //调用三
    // request({ url: '/home/multidata' }).then((res) => {
    //   console.log(res)
    // })
    //调用二
    // request({
    //   baseConfig: {
    //     url: '/home/multidata',
    //     method: 'get',
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   failure: (err) => {
    //     console.log(err)
    //   },
    // })
    //调用一
    // request(
    //   { url: '/home/multidata', method: 'get' },
    //   (res) => {
    //     console.log(res)
    //   },
    //   (err) => {
    //     console.log(err)
    //   }
    // )
  },
}
</script>

<style>
</style>
