<template>
  <div class="luckDrawBg">
      <div class="frame">
        <div class="disc"></div>
        <div class="lamp"></div>
        <div class="lamp2"></div>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less" scoped>
.luckDrawBg {
  width: 100%;
  height: 1332px;
  position: relative;
  background: url(./img/luckDraw.png) no-repeat;
  background-size: 100%;
  .frame {
    width: 654px;
    height: 654px;
    position: absolute;
    top: 370px;
    left: 50%;
    margin-left: -327px;
    background: url(./img/frame.png) no-repeat;
    background-size: 100%;
    .disc {
      width: 624px;
      height: 621px;
      position: absolute;
      top: 16px;
      left: 50%;
      margin-left: -312px;
      background: url(./img/disc.png) no-repeat;
      background-size: 100%;
    }
    .lamp {
      width: 641px;
      height: 624px;
      position: absolute;
      top: 18px;
      left: 50%;
      margin-left: -320.5px;
      background: url(./img/lamp.png) no-repeat;
      background-size: 100%;
      animation: lampMove .8s linear infinite;
    }
    .lamp2 {
      width: 641px;
      height: 624px;
      position: absolute;
      top: 18px;
      left: 50%;
      margin-left: -320.5px;
      background: url(./img/lamp2.png) no-repeat;
      background-size: 100%;
      animation: lampShow .8s linear infinite;
    }
    @keyframes lampMove {
      0% {
         opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes lampShow {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
