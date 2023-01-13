<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="typeValue" :options="currTypeOption"/>
      <van-dropdown-item
          v-model="dateInterval"
          :options="currShortcuts"
          @change="dropdownChange"
          ref="dateRangeDropdownRef"
      >
        <date-range
            :start-date="currStartDate"
            :end-date="currStartDate"
            @confirm="dataRangeConfirm"
        />
      </van-dropdown-item>
      <van-dropdown-item v-model="sortValue" :options="currSortOption"/>
    </van-dropdown-menu>
  </div>
</template>

<script>
import {DropdownItem, DropdownMenu} from "vant";
import DateRange from "@/components/DateRange";
import {getStartAndEndDateArrayByInterval} from "@/utils/date";

export default {
  name: "StatisticsMenu",
  components: {
    DateRange,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
  },
  props: {
    typeOption: {
      type: Array,
    },
    sortOption: {
      type: Array,
    },
  },
  data() {
    const defaultRange = {
      text: '最近一周',
      value: 3600 * 1000 * 24 * 7,
    }
    const defaultShortcuts = [
      defaultRange,
      {
        text: '最近一个月',
        value: 3600 * 1000 * 24 * 30,
      },
      {
        text: '最近三个月',
        value: 3600 * 1000 * 24 * 90,
      },
      {
        text: '最近半年',
        value: 3600 * 1000 * 24 * 180,
      },
      {
        text: '最近一年',
        value: 3600 * 1000 * 24 * 365,
      },
    ]
    const {startDate, endDate} = getStartAndEndDateArrayByInterval(defaultRange.value)

    console.log("-----------------------------------")
    console.log(this.typeOption)
    console.log(this.typeOption[this.typeOption.length-1])
    return {
      currStartDate: startDate,
      currEndDate: endDate,
      typeValue: this.typeOption[this.typeOption.length-1].value,
      sortValue: this.sortOption[this.sortOption.length-1].value,
      currTypeOption: this.typeOption,
      currSortOption: this.sortOption,
      dateInterval: defaultRange.value,
      currShortcuts: defaultShortcuts,
    }
  },

  methods: {
    dropdownChange(value) {
      const {start, end} = getStartAndEndDateArrayByInterval(value)
      this.currStartDate = start
      this.currStartDate = end
    },
    dataRangeConfirm(range, currStartDate, currEndDate) {
      console.log(range)
      this.currStartDate = currStartDate
      this.currStartDate = currEndDate
      this.currShortcuts.push({
        text: range,
        value: range,
      })
      this.dateInterval = range
      this.$refs.dateRangeDropdownRef.toggle()
    }
  },
}
</script>

<style scoped>

</style>