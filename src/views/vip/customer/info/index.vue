<template>
  <show-info v-if="currentStatus === 'show'" :info="customerInfo" @switchEditInfo="switchEditInfo"></show-info>
  <edit-info v-else :info="customerInfo" @switchShowInfo="switchShowInfo"/>
</template>

<script>
import EditInfo from "@/views/vip/customer/info/EditInfo";
import ShowInfo from "@/views/vip/customer/info/ShowInfo";

export default {
  name: "CustomerInfo",
  components: {EditInfo, ShowInfo},
  data() {
    return {
      customerInfo: {
        nickName: "浮生凉年丶",
        thumbnail: "~@/assets/img/header.jpg",
        name: "浮生凉年丶",
        mobilePhone: "15177777777",
        gender: "男",
        email: "1009455631@qq.com",
        birthdate: 1111111111111,
        address: "我打算打送的发送到发嘎达发噶范德萨嘎嘎",
      },
      currentStatus: "show",
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },

    switchEditInfo() {
      this.currentStatus = 'edit'
    },

    switchShowInfo() {
      this.currentStatus = 'show'
    }
  }
}
</script>

<style scoped>

</style>