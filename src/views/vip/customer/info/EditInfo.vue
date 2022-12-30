<template>
  <el-form :model="customerInfo" label-width="20vw" label-position="left" style="max-width: 90vw;height: 100vh; margin-left: 5vw">
    <el-form-item label="微信昵称" style="padding-top: 5vh">
      <el-input v-model="customerInfo.nickName" readonly="true"/>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="customerInfo.name"/>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="customerInfo.gender">
        <el-radio label="男"/>
        <el-radio label="女"/>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="生日">
      <el-date-picker
          v-model="customerInfo.birthdate"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
      />
    </el-form-item>
    <el-form-item label="移动电话">
      <el-input v-model="customerInfo.mobilePhone"/>
    </el-form-item>
     <el-form-item label="详细地址">
      <el-input v-model="customerInfo.address" type="textarea"/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "EditInfo",
  props: {
    info: Object
  },
  data() {
    return {
      customerInfo: this.info
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