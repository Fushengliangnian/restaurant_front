<template>
  <div>
    <date-range
      :start-date="startDate"
      :end-date="endDate"
    />

    <van-cell title="总计" is-link @click="toConsumeStatistics" :value="total"/>
  </div>
</template>

<script>
import DateRange from "@/components/DateRange";
import {Cell, showConfirmDialog} from 'vant';

export default {
  name: "ConsumeGather",
  components: {
    DateRange,
    [Cell.name]: Cell,
  },
  data() {
    return {
      startDate: ['2022', '06', '01'],
      endDate: ['2023', '06', '01'],
      total: 100,
    }
  },
  methods: {
    toConsumeStatistics() {
      showConfirmDialog({
        message: '查看消费明细',
        // theme: 'round-button',
      }).then(() => {
        this.$router.replace('/vip/consume/statistics')
      }).catch(() => {
        // on cancel
      })
    }
  }
}
</script>

<style scoped>

</style>