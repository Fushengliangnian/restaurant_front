<template>
  <div>
    <div class="card">
      <div class="card-box">
        <div class="card-img"><img src="~@/assets/img/vip-card/card.png" alt=""></div>
        <div class="top-right">会员</div>
        <div class="bottom-right">卡号：1009455631123445</div>
        <div />
      </div>
      <div class="card-panel">
        <div class="card-panel-item" @click="readBalance">
          <div>￥0</div>
          <div>余额</div>
        </div>
        <div class="card-panel-item">
          <div>0</div>
          <div>积分</div>
        </div>
        <div class="card-panel-item">
          <div>0</div>
          <div>卡券</div>
        </div>
      </div>
    </div>
    <div class="card menu">
      <el-row>
        <el-col :span="24">
          <div style="font-weight: bold; margin: 1vh 0 0 2vw;">我的功能</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col v-for="(menu, index) in cardMenu" :key="index" :span="6" @click="clickToPath(menu.path)">
          <div class="grid-content">
            <div>
              <Tickets style="height: 3.6vh;" />
            </div>
            <div>{{ menu.meta.title }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import { vipRouter } from '@/router/vip'

export default {
  name: 'VipView',
  components: [],
  data() {
    return {
      cardMenu: vipRouter
    }
  },
  methods: {
    readBalance() {
      console.log('readBalance')
      this.$router.push('/pay/top-up')
    },
    clickToPath(path) {
      console.log('clickToPath path: ', path)
      console.log('router', this.$router)
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

.card {
  background-color: #feffff;
}

.card-box {
  position: relative;
  height: 32vh;
  width: 99vw;
}

.card-box .card-img img {
  position: absolute;
  height: 28vh;
  width: 90vw;
  /*left: 12px;*/
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*margin-left: 4vw;*/
}

.card-box .top-right {
  position: absolute;
  line-height: 14px;
  left: 8vw;
  top: 8vw;
  z-index: 2
}

.card-box .bottom-right {
  position: absolute;
  line-height: 18px;
  left: 8vw;
  bottom: 8vw;
  z-index: 2
}

.card-panel .card-panel-item {
  float: left;
  margin-left: 18vw;
  text-align: center;
}

.menu {
  height: 26vh;
  margin: 3vw;
}

.grid-content {
  margin: 4vw 4vw 0 4vw;
  font-size: 12px;
  text-align: center;
}

</style>
