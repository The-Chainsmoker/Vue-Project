<template>
  <div>
    <ul>
      <li>我是用户</li>
      <li>我是用户</li>
      <li>我是用户</li>
    </ul>
    {{arr}}
    <button @click="showDate">点击</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import HelloWorld from '@/view/HelloWorld'
export default {
  name: 'User',
  data() {
    return {
      change: 2,
      sum: 0,
      show: false,
      arr: ['小明'],
    }
  },
  components: {
    HelloWorld,
  },
  created() {},
  //computed多对一
  computed: {
    ...mapState({
      old: (state) => state.username,
    }),
    ...mapState(['username']),

    ...mapGetters(['getName']),
    ...mapActions({
      Agood: 'yong',
      Aname: 'good',
    }),
    ...mapMutations(['hello', 'birth']),
  },
  //watch一对多
  watch: {
    change(newName, oldName) {
      this.sum = newName
    },
  },
  methods: {
    showDate() {
      this.$set(this.arr, 0, '转正')
      console.log(this.arr)
    },
  },
}
</script>

<style scoped>
.name {
  font-size: 20px;
}
</style>