import {createRouter, createWebHashHistory} from 'vue-router'
import VipView from '@/views/vip/index.vue'
import ShopView from '@/views/shop/index.vue'
import {vipRouter} from "@/router/vip";

const Home = {template: '<div>Home</div>'}
// const Order = {template: '<div>Order</div>'}
const About = {template: '<div>About</div>'}

let rootRoutes = [
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
        path: '/shop',
        component: ShopView,
        meta: {index: 2, title: '积分商城'},
    },
    {
        path: '/vip',
        component: VipView,
        meta: {index: 3, title: '会员中心'},
    },
    {
        path: '/about',
        component: About
    },
]
rootRoutes = rootRoutes.concat(vipRouter)

export const routes = rootRoutes

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

