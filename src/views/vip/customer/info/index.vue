<template>
  <show-info v-if="currentStatus === 'show'" :info="customerInfo"></show-info>
  <edit-info v-else :info="customerInfo"/>
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
    }
  }
}
</script>

<style scoped>

</style>