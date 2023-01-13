<template>
  <div>
    <date-range
        :start-date="startDate"
        :end-date="endDate"
    />

    <table-list></table-list>
  </div>
</template>

<script>
import DateRange from "@/components/DateRange";
import TableList from "@/components/TableList";

export default {
  name: "ConsumeStatistics",
  components: {
    DateRange,
    TableList,
  },
  data() {
    return {
      startDate: ['2022', '06', '01'],
      endDate: ['2023', '06', '01'],
      total: 100,
    }
  },
}
</script>

<style scoped>

</style>