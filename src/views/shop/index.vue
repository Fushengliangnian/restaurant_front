<template>
  <div>
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item v-model="typeValue" :options="typeOption" @change="onChange" />
        <van-dropdown-item v-model="sortValue" :options="sortOption" @change="onChange" />
      </van-dropdown-menu>
    </van-sticky>

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
    <van-back-top bottom="15vh" />

  </div>

</template>

<script>
import { Sticky, List, Tab, Tabs, Card, DropdownMenu, DropdownItem, BackTop } from 'vant'
import { goodsListAPI } from '@/api/shop'

export default {
  name: 'ShopView',
  components: {
    [Sticky.name]: Sticky,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Card.name]: Card,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [List.name]: List,
    [BackTop.name]: BackTop
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
    const size = 10
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
        goodsTotal: size
      },
      goodsAPIParam: {
        size: size,
        page: 1,
        type: typeValue,
        sort: sortValue
      }
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    onLoad() {
      if (this.goodsResponse.goodsTotal === this.goodsResponse.goodsList.length) {
        this.finished = true
        return
      }
      this.getGoodsList()
    },

    onChange() {
      this.goodsResponse.goodsList = []
      const size = 10
      this.goodsResponse.goodsTotal = size
      this.goodsAPIParam.size = size
      this.goodsAPIParam.page = 1
      this.goodsAPIParam.sort = this.sortValue
      this.goodsAPIParam.type = this.typeValue
      this.getGoodsList()
    },

    getGoodsList() {
      this.loading = true
      goodsListAPI(
        this.goodsAPIParam
      ).then(response => {
        // console.log(response.data)
        this.goodsResponse.goodsList.push(...response.data.result.results)
        this.goodsResponse.goodsTotal = response.data.result.count
      })
      // this.goodsAPIParam.size += 10
      this.goodsAPIParam.page += 1
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
