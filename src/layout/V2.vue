<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o" @click="clickTo">首页</van-tabbar-item>
    <van-tabbar-item name="shop" icon="shop-o" @click="clickTo">积分商城</van-tabbar-item>
    <van-tabbar-item name="vip" icon="friends-o" @click="clickTo">会员中心</van-tabbar-item>
    <van-tabbar-item name="about" icon="info-o" @click="clickTo">关于我们</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
  name: "BaseLayoutV2",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: "home",
    }
  },
  methods: {
    clickTo () {
      console.log(this.active)
      const path = "/" + this.active
      console.log(path)
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>

</style>