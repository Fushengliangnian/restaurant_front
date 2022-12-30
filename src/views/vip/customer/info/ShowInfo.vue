<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">微信头像</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content" style="text-align: right">{{ customerInfo.nickName }}</div>
    </el-col>
  </el-row>
  <el-divider />
  <el-row>
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">微信昵称</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content" style="text-align: right">{{ customerInfo.nickName }}</div>
    </el-col>
  </el-row>
  <el-divider />
  <el-row>
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">姓名</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content" style="text-align: right">{{ customerInfo.name }}</div>
    </el-col>
  </el-row>
  <el-divider />
  <el-row>
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">性别</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content" style="text-align: right">{{ customerInfo.gender }}</div>
    </el-col>
  </el-row>
  <el-divider />
  <el-row>
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">生日</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content" style="text-align: right">{{ customerInfo.birthdate }}</div>
    </el-col>
  </el-row>
  <el-divider />
  <el-row>
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">移动电话</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content" style="text-align: right">{{ customerInfo.mobilePhone }}</div>
    </el-col>
  </el-row>
  <el-divider />
  <el-row>
    <el-col :span="12">
      <div class="grid-content" style="text-align: left">详细地址</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content" style="text-align: right; word-break:break-all; white-space: normal;">{{ customerInfo.address }}</div>
    </el-col>
  </el-row>
  <!--  <el-descriptions-->
  <!--      title="Vertical list without border"-->
  <!--      :column="2"-->
  <!--      direction="vertical"-->
  <!--  >-->
  <!--    <el-descriptions-item label="微信昵称">{{ customerInfo.nickName }}</el-descriptions-item>-->
  <!--    <el-descriptions-item label="姓名">{{ customerInfo.name }}</el-descriptions-item>-->
  <!--    <el-descriptions-item label="性别" :span="2">{{ customerInfo.gender }}</el-descriptions-item>-->
  <!--    <el-descriptions-item label="生日">{{ customerInfo.birthdate }}</el-descriptions-item>-->
  <!--    <el-descriptions-item label="移动电话"> {{ customerInfo.mobilePhone }}</el-descriptions-item>-->
  <!--    <el-descriptions-item label="详细地址"> {{ customerInfo.address }}</el-descriptions-item>-->
  <!--  </el-descriptions>-->
</template>

<script>
export default {
  name: "ShowInfo",
  props: {
    info: Object
  },
  data() {
    return {
      customerInfo: this.info
    }
  },
}
</script>

<style scoped>

</style>