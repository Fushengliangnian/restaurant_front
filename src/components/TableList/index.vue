<template>
  <div>
    <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell-group v-for="row in rows" :key="row" inset :title="row.key">
        <van-cell v-for="column in columns" :key="column" :title="column.value" :value="row[column.key]" />
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
import { List, Cell, CellGroup } from 'vant'

export default {
  name: 'TableList',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  props: {
    rowData: Array,
    columnData: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      rows: [
        {
          createdTime: '2022/01/02 13:23:09',
          key: '2022/01/02 13:23:09',
          orderId: '11111111111111',
          amount: '100.20'
        },
        {
          createdTime: '2022/01/02 13:23:09',
          key: '2022/01/02 13:23:09',
          orderId: '11111111111111',
          amount: '100.20'
        }
      ],
      columns: this.columnData,
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      this.loading = false
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.rows.push(this.rows.length + 1);
      //   }
      //
      //   // 加载状态结束
      //   this.loading = false;
      //
      //   // 数据全部加载完成
      //   if (this.rows.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    }
  }
}
</script>

<style scoped>

</style>
