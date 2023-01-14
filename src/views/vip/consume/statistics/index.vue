<template>
  <div>
    <van-sticky>
      <date-range
        :start-date="startDate"
        :end-date="endDate"
        @confirm="onChange"
      />
    </van-sticky>
    <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell-group v-for="row in billResponse.rows" :key="row" inset :title="row.key">
        <van-cell v-for="column in columnData" :key="column" :title="column.value" :value="row[column.key]" />
      </van-cell-group>
    </van-list>
    <van-back-top bottom="15vh" />
  </div>
</template>

<script>
import DateRange from '@/components/DateRange'
import { getBillListAPI } from '@/api/pay'
import { List, Cell, CellGroup, Sticky, BackTop } from 'vant'

export default {
  name: 'ConsumeStatistics',
  components: {
    DateRange,
    [Sticky.name]: Sticky,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [BackTop.name]: BackTop
  },
  data() {
    const size = 10

    return {
      loading: false,
      finished: false,
      startDate: ['2022', '06', '01'],
      endDate: ['2023', '06', '01'],
      columnData: [
        {
          key: 'orderId',
          value: '订单号'
        },
        {
          key: 'amount',
          value: '金额'
        },
        {
          key: 'couponAmount',
          value: '优惠券金额'
        },
        {
          key: 'extraDiscountAmount',
          value: '额外优惠金额'
        }
      ],
      billResponse: {
        total: 5,
        rows: []
      },
      billParams: {
        size: size,
        page: 1
      }
    }
  },
  created() {
    this.getBillList()
  },
  methods: {
    onLoad() {
      console.log(this.billResponse.total)
      console.log(this.billResponse.rows.length)
      if (this.billResponse.total <= this.billResponse.rows.length) {
        this.finished = true
        return
      }
      this.getBillList()
    },
    onChange(range, star, end) {
      console.log(range, star, end)
      this.billResponse.rows = []
      const size = 10
      this.billResponse.total = size
      this.billParams.size = size
      this.billParams.page = 1
      this.getBillList()
    },
    getBillList() {
      this.loading = true
      getBillListAPI(this.billParams).then(response => {
        const results = [
          {
            key: '2022/02/03 11:23:24',
            orderId: 1111111111,
            amount: 1111111111,
            couponAmount: 1111111111,
            extraDiscountAmount: 1111111111
          },
          {
            key: '2022/02/03 11:23:24',
            orderId: 1111111111,
            amount: 1111111111,
            couponAmount: 1111111111,
            extraDiscountAmount: 1111111111
          },
          {
            key: '2022/02/03 11:23:24',
            orderId: 1111111111,
            amount: 1111111111,
            couponAmount: 1111111111,
            extraDiscountAmount: 1111111111
          },
          {
            key: '2022/02/03 11:23:24',
            orderId: 1111111111,
            amount: 1111111111,
            couponAmount: 1111111111,
            extraDiscountAmount: 1111111111
          }
        ]
        this.billResponse.rows.push(...results)
        this.billResponse.total = 5
      })
      this.billParams.page += 1
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
