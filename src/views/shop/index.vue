<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="typeValue" :options="typeOption" />
      <van-dropdown-item v-model="sortValue" :options="sortOption" />
    </van-dropdown-menu>
    <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了..."
      @load="onLoad"
    >
      <van-card
        v-for="goods in goodsResponse.goodsList"
        :key="goods.id"
        :title="goods.title"
        price="10"
        desc="描述信息"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      />
    </van-list>

  </div>

</template>

<script>
import { List, Tab, Tabs, Card, DropdownMenu, DropdownItem } from 'vant'
import { goodsListAPI } from '@/api/shop'

export default {
  name: 'ShopView',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Card.name]: Card,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [List.name]: List
  },
  data() {
    const typeValue = 0
    const sortValue = 'a'
    const typeOption = [
      { text: '全部商品', value: 0 },
      { text: '优惠券', value: 1 },
      { text: '活动商品', value: 2 }
    ]
    const sortOption = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ]
    return {
      active: '',
      typeValue,
      sortValue,
      typeOption,
      sortOption,
      loading: false,
      finished: false,
      goodsResponse: {
        goodsList: [],
        goodsTotal: 100
      },
      goodsAPIParam: {
        size: 10,
        page: 0
      }
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    onLoad() {
      const param = {}
      if (this.goodsResponse.goodsTotal === this.goodsResponse.goodsList.length) {
        this.finished = true
        return
      }
      this.getGoodsList(param)
    },

    getGoodsList() {
      this.loading = true
      goodsListAPI(
        this.goodsAPIParam
      ).then(response => {
        this.goodsResponse.goodsList.push(...response.data)
        this.goodsResponse.goodsTotal = response.data.total
      })
      this.goodsAPIParam.size += 10
      this.goodsAPIParam.page += 1
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
