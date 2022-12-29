<template>
  <div class="bottom-nav-item" @click="itemClick">
     <div v-if="!isActive">
       <slot name="item-icon"></slot>
     </div>
     <div v-else>
        <slot name="item-icon-active"></slot>
     </div>
     <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:"BottomNavItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
        return {
           // isActive:true
        }
    },
    computed:{
      isActive(){
        //判断
        //return this.$route.path.indexOf(this.path) !== -1
        //return this.$route.path === this.path
        return this.$route.path.indexOf(this.path)?false:true
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }

}
</script>

<style>
  #bottom-nav{
    display: flex;

  }
  #bottom-nav{
    background-color: #f6f6f6;
    border-top: 0.5vh #ccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 2.5vh;
    box-shadow:0px -1px 1px rgba(100,100,100,.2) ;
  }
  .bottom-nav-item{
    flex: 1;
    text-align: center;
    height: 8vh;
    font-size: 14px;
  }
 .bottom-nav-item img{
     width: 3.6vh;
     height: 4vh;
     margin-top: 0.5vh;
     vertical-align: middle;
     margin-bottom: 0.6vh;
 }
 .active{
     color: red;
 }
</style>
