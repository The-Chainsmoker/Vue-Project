<template>
  <div class="hello" @touchstart="handleDragStart" @touchmove="handleDragMove" @touchend="handleDragEnd">

    <div class="left" :style="{transition:'all 0.5s',width:width}">
      <img src="../assets/snow.png" alt="">
    </div>

    <div class="right">
      <img class="head" src="../assets/beautiful.png" alt="">
      <img class="content" @click="change" src="../assets/beautiful.png" alt="">
      <img class="foot" :class="{footActive:show}" src="../assets/snow.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false,
      starMove: '', //获取手指起始坐标
      moveDistance: '',
      moveY: '',
      width: '',
    }
  },
  methods: {
    change() {
      this.show = !this.show
    },
    handleDragStart(el) {
      //获取手指起始坐标
      this.starMove = el.targetTouches[0].clientX
    },
    handleDragMove(el) {
      //滑动后的坐标
      this.moveY = el.targetTouches[0].clientX
      this.moveDistance = (this.moveY - this.starMove) * 2
      this.width = this.moveDistance + 'px'
      console.log(this.moveDistance)
    },
    handleDragEnd() {
      if (this.moveDistance >= 200) {
        this.width = '100%'
      } else {
        this.width = 0 + 'px'
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hello {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}

img {
  height: 400px;
}

.left {
  width: 0px;
  overflow: hidden;
}

.right {
  flex: 1;
  overflow: hidden;
  /* z-index: 100; */
}

.head,
.content,
.foot {
  height: 230px;
}
.foot {
  width: 20%;
  position: absolute;
  right: -20%;
  bottom: 4px;
  transition: all 0.5s;
}

.footActive {
  right: 0px !important;
}
</style>
