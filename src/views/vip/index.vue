<template>
  <div>
    <div class="card">
      <div class="card-box">
        <div class="card-img"><img src="~@/assets/img/vip-card/card.png" alt=""></div>
        <div class="top-right">会员</div>
        <div class="bottom-right">卡号：1009455631123445</div>
        <div></div>
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
        <el-col :span="6">
          <div class="grid-content">
             <div><Tickets style="height: 3.6vh;" /></div>
            <div>个人信息</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div><Wallet style="height: 3.6vh;" /></div>
            <div>在线充值</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div><CreditCard style="height: 3.6vh;" /></div>
            <div>消费汇总</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div><Document style="height: 3.6vh;" /></div>
<!--            <div><img src="~@/assets/img/bottomnav/shouye.png" alt="" style="width: 3.6vh;"></div>-->
            <div>消费明细</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <div><Coin style="height: 3.6vh;" /></div>
<!--            <div><img src="~@/assets/img/bottomnav/shouye.png" alt="" style="width: 3.6vh;"></div>-->
            <div>积分明细</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div><Goods style="height: 3.6vh;" /></div>
<!--            <div><img src="~@/assets/img/bottomnav/shouye.png" alt="" style="width: 3.6vh;"></div>-->
            <div>积分兑换</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div><img src="~@/assets/img/bottomnav/shouye.png" alt="" style="width: 3.6vh;"></div>
            <div>会员特权</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div><img src="~@/assets/img/bottomnav/shouye.png" alt="" style="width: 3.6vh;"></div>
            <div>解除绑定</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "VipView",
  components: [],
  methods: {
    readBalance () {
      console.log("readBalance")
      this.$router.push("/vip/top-up")
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
