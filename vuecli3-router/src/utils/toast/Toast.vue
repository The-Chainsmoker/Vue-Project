<template>
  <div class="toast" v-show="show">
    <div class="msg">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      show: false,
      time: '',
    }
  },
  methods: {
    loadTime(msg, delay = 2000) {
      if (this.time) {
        clearTimeout(this.time)
      }

      this.show = true
      this.msg = msg
      this.time = setTimeout(() => {
        this.show = false
        this.msg = ''
      }, delay)
    },
  },
}
</script>
<style lang="css" scoped>
.toast {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.3);
}
.toast .msg {
  width: 120px;
  height: 120px;
  text-align: center;
  line-height: 120px;
  border-radius: 15px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
