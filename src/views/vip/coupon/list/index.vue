<template>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    :show-close-button="false"
    :show-exchange-bar="false"
    @change="onChange"
    @exchange="onExchange"
  />
  <van-popup
    :show="showDetail"
    round
    closeable
    position="bottom"
    :style="{ height: '30%' }"
  />
</template>

<script>
import { CouponCell, CouponList, Popup } from 'vant'

export default {
  name: 'CouponList',
  components: {
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [Popup.name]: Popup
  },
  data() {
    const coupon = {
      available: 1,
      condition: '无门槛\n最多优惠12元',
      reason: '',
      value: 150,
      name: '优惠券名称',
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: '1.5',
      unitDesc: '元'
    }
    return {
      coupons: [
        coupon
      ],
      showDetail: false,
      chosenCoupon: -1,
      disabledCoupons: [coupon]
    }
  },
  methods: {
    onChange(index) {
      this.showDetail = true
      this.chosenCoupon = index
    },
    onExchange() {
      this.coupons.push({
        available: 1,
        condition: '无门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
      })
    }
  }
}
</script>

<style scoped>

</style>
