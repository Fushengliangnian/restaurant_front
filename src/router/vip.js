import VipView from '@/views/vip'
import TopUpView from '@/views/vip/top-up'
import CustomerInfo from '@/views/vip/customer/info'
import ConsumeGather from '@/views/vip/consume/gather'
import ConsumeStatistics from '@/views/vip/consume/statistics'
import IntegralStatistics from '@/views/vip/integral/statistics'
import CouponList from '@/views/vip/coupon/list'

export const vipRouter = [
  {
    path: '/vip/customer/info',
    component: CustomerInfo,
    meta: { index: 3, title: '个人信息' }
  },
  {
    path: '/vip/top-up',
    component: TopUpView,
    meta: {
      index: 4,
      title: '在线充值'
    }
  },
  {
    path: '/vip/consume/gather',
    component: ConsumeGather,
    meta: { index: 3, title: '消费汇总' }
  },
  {
    path: '/vip/consume/statistics',
    component: ConsumeStatistics,
    meta: { index: 3, title: '消费明细' }
  },
  {
    path: '/vip/integral/statistics',
    component: IntegralStatistics,
    meta: { index: 3, title: '积分明细' }
  },
  {
    path: '/vip/coupon/list',
    component: CouponList,
    meta: { index: 3, title: '我的优惠券' }
  },
  {
    path: '/vip/customer/privilege',
    component: VipView,
    meta: { index: 3, title: '会员特权' }
  },
  {
    path: '/vip/customer/unbind',
    component: VipView,
    meta: { index: 3, title: '解除绑定' }
  }
]
