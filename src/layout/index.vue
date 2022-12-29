<template>
  <bottom-nav>
    <bottom-nav-item path="/home" activeColor="purple">
      <template #item-icon>
        <img src="~@/assets/img/bottomnav/shouye.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/bottomnav/shouye.active.png" alt="">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </bottom-nav-item>
    <bottom-nav-item path="/order" activeColor="purple">
      <template #item-icon>
        <img src="~@/assets/img/bottomnav/shouye.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/bottomnav/shouye.active.png" alt="">
      </template>
      <template #item-text>
        <div>我要点餐</div>
      </template>
    </bottom-nav-item>
    <bottom-nav-item path="/vip" activeColor="purple">
      <template #item-icon>
        <img src="~@/assets/img/bottomnav/shouye.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/bottomnav/shouye.active.png" alt="">
      </template>
      <template #item-text>
        <div>会员中心</div>
      </template>
    </bottom-nav-item>
    <bottom-nav-item path="/about" activeColor="purple">
      <template #item-icon>
        <img src="~@/assets/img/bottomnav/shouye.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/bottomnav/shouye.active.png" alt="">
      </template>
      <template #item-text>
        <div>关于我们</div>
      </template>
    </bottom-nav-item>
  </bottom-nav>
</template>

<script>
import BottomNav from '@/components/BottomNav/index.vue'
import BottomNavItem from '@/components/BottomNav/BottomNavItem.vue'

export default {
  name: "BaseLayout",
  components: {
    BottomNav,
    BottomNavItem
  }
}
</script>

<style scoped>

</style>
