import VipView from "@/views/vip";
import TopUpView from "@/views/vip/top-up";
import CustomerInfo from "@/views/vip/customer/info";
// import StatisticsView from "@/views/vip/statistics";

export const vipRouter = [
    {
        path: '/vip/customer/info',
        component: CustomerInfo,
        meta: {index: 3, title: '个人信息'},
    },
    {
        path: '/vip/top-up',
        component: TopUpView,
        meta: {
            index: 4,
            title: '在线充值'
        },
    },
    {
        path: '/vip/consume/gather',
        component: VipView,
        meta: {index: 3, title: '消费汇总'},
    },
    {
        path: '/vip/consume/statistics',
        component: VipView,
        meta: {index: 3, title: '消费明细'},
    },
    {
        path: '/vip/integral/statistics',
        component: VipView,
        meta: {index: 3, title: '积分明细'},
    },
    {
        path: '/vip/integral/exchange',
        component: VipView,
        meta: {index: 3, title: '积分兑换'},
    },
    {
        path: '/vip/customer/privilege',
        component: VipView,
        meta: {index: 3, title: '会员特权'},
    },
    {
        path: '/vip/customer/unbind',
        component: VipView,
        meta: {index: 3, title: '解除绑定'},
    },
]