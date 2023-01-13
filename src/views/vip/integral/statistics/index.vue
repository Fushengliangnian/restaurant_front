<template>
  <div>
    <statistics-menu
        :type-option="typeOption"
        :sort-option="sortOption"
    ></statistics-menu>
    <table-list></table-list>
  </div>
</template>

<script>
import StatisticsMenu from "@/components/StatisticsMenu";
import TableList from "@/components/TableList";


export default {
  name: "IntegralStatistics",
  components: {
    StatisticsMenu,
    TableList,
  },
  data() {
    return {
      typeOption: [
        {text: '全部类型明细', value: 0},
        {text: '收入明细', value: 1},
        {text: '兑换明细', value: 2},
      ],
      sortOption: [
        {text: '默认排序', value: 'a'},
        {text: '时间正序', value: 'b'},
        {text: '时间倒序', value: 'c'},
      ]
    }
  },
  methods: {},
}
</script>

<style scoped>

</style>