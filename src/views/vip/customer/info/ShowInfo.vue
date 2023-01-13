<template>
  <div>
    <van-cell-group class="padding-top" inset>
      <van-cell title="头像">
        <template #value>
          <van-image
              round
              width="5rem"
              height="5rem"
              fit="cover"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </template>
      </van-cell>

      <van-cell title="微信昵称" :value="customerInfo.nickName"/>
      <van-cell title="姓名" :value="customerInfo.name"/>
      <van-cell title="性别" :value="customerInfo.gender"/>
      <van-cell title="生日" :value="customerInfo.birthdate"/>
      <van-cell title="移动电话" :value="customerInfo.mobilePhone"/>
      <van-cell title="详细地址" :value="customerInfo.address"/>
      <van-button class="edit-button" plain round type="primary" block @click="editInfo">编辑信息</van-button>
    </van-cell-group>
  </div>


</template>

<script>
import {Button, Cell, CellGroup, Image as VanImage} from 'vant';


export default {
  name: "ShowInfo",
  props: {
    info: Object
  },
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [VanImage.name]: VanImage,
  },
  data() {
    return {
      customerInfo: this.info
    }
  },
  methods: {
    editInfo() {
      console.log("--------- editInfo -------")
      this.$emit('switchEditInfo')
    }
  }
}
</script>

<style scoped>
.padding-top {
  padding-top: 2vh;
}

.edit-button {
  margin: 2vh 0;
}
</style>