import {createRouter, createWebHashHistory} from 'vue-router'
import VipView from '@/views/vip/index.vue'
import TopUpView from '@/views/vip/top-up/index.vue'
import StatisticsView from '@/views/vip/statistics/index.vue'

const Home = {template: '<div>Home</div>'}
const Order = {template: '<div>Order</div>'}
const About = {template: '<div>About</div>'}

export const routes = [
    {
        path: '/',
        redirect: '/home',
        meta: {index: 1, title: '首页'},
    },
    {
        path: '/home',
        component: Home,
        meta: {index: 1, title: '首页'},
    },
    {
        path: '/order',
        component: Order,
        meta: {index: 2, title: '我要点餐'},
    },
    {
        path: '/vip',
        component: VipView,
        meta: {index: 3, title: '会员中心'},
    },
    {
        path: '/vip/top-up',
        component: TopUpView,
        meta: {
            index: 4,
            title: '会员充值'
        },
    },
    {
        path: '/vip/statistics',
        component: StatisticsView,
        meta: {
            index: 5,
            title: '明细'
        },
    },
    {
        path: '/about',
        component: About
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router

