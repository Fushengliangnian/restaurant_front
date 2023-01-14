<template>
  <div>
    <van-field
      v-model="dateRange"
      is-link
      readonly
      name="datePicker"
      label="时间选择"
      placeholder="点击选择时间"
      @click="showPicker = true"
    />

    <van-popup :show="showPicker" position="bottom">
      <van-picker-group
        title="日期筛选"
        :tabs="['开始日期', '结束日期']"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      >
        <van-date-picker v-model="currStartDate" :min-date="currMinDate" :max-date="currMaxDate" />
        <van-date-picker v-model="currEndDate" :min-date="currMinDate" :max-date="currMaxDate" />
      </van-picker-group>
    </van-popup>
  </div>
</template>

<script>
import { PickerGroup, DatePicker, Popup, Cell, Button, Field } from 'vant'

export default {
  name: 'DateRange',
  components: {
    [PickerGroup.name]: PickerGroup,
    [DatePicker.name]: DatePicker,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Field.name]: Field
  },
  props: {
    startDate: {
      type: Array,
      required: false,
      default() {
        return ['2022', '06', '01']
      }
    },
    endDate: {
      type: Array,
      required: false,
      default() {
        return ['2023', '06', '01']
      }
    },
    minDate: {
      type: Date,
      default: new Date(2020, 0, 1),
      required: false
    },
    maxDate: {
      type: Date,
      default: new Date(2025, 5, 1),
      required: false
    }
  },
  data() {
    return {
      currStartDate: this.startDate,
      currEndDate: this.endDate,
      currMinDate: this.minDate,
      currMaxDate: this.maxDate,
      showPicker: false
    }
  },
  computed: {
    // 该 prop 变更时计算属性也会自动更新
    dateRange() {
      return this.currStartDate.join('/') + ' - ' + this.currEndDate.join('/')
    }
  },
  methods: {
    onConfirm() {
      this.showPicker = false
      this.$emit('confirm', this.dateRange, this.currStartDate, this.currEndDate)
    }
  }
}
</script>

<style scoped>

</style>
