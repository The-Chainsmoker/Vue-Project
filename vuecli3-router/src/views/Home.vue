<template>
  <div class="home">
    <select v-model="fruits" multiple>
      <option value="苹果">苹果</option>
      <option value="香蕉">香蕉</option>
      <option value="葡萄">葡萄</option>
    </select>
    <!-- 指定传入title到子组件 -->
    <!-- <Hello v-model="goodName"></Hello> -->
    <Hello>
      <template slot-scope="user">
        <!--slot包含data对象-->
        <div v-for="(item, index) in user.data">{{ index }} --- {{ item }}</div>
      </template>
    </Hello>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
export default {
  name: 'Home',
  components: {
    Hello,
  },
  data() {
    return {
      fruits: [],
      goodName: '你好哈哈',
      value: '123',
    }
  },
  created() {},
  activated() {
    console.log('home-activated')
  },
  deactivated() {
    console.log('home-deactivated')
  },
  methods: {
    // this.$toast.loadTime('哈哈', 2000)
  },
}
</script>
