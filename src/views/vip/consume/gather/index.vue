<template>
  <div>
    <date-range
        :start-date="startDate"
        :end-date="endDate"
        @confirm="flushList"
    />

    <van-cell title="总计" is-link :value="total" @click="toConsumeStatistics"/>
  </div>
</template>

<script>
import DateRange from '@/components/DateRange'
import {Cell, showConfirmDialog} from 'vant'

export default {
  name: 'ConsumeGather',
  components: {
    DateRange,
    [Cell.name]: Cell
  },
  data() {
    return {
      startDate: ['2022', '06', '01'],
      endDate: ['2023', '06', '01'],
      total: 100
    }
  },
  methods: {
    toConsumeStatistics() {
      showConfirmDialog({
        message: '查看消费明细'
        // theme: 'round-button',
      }).then(() => {
        this.$router.replace('/vip/consume/statistics')
      }).catch(() => {
        // on cancel
      })
    },

    getConsumeGather() {
    },

    flushList(range, start, end) {
    }
  }
}
</script>

<style scoped>

</style>
