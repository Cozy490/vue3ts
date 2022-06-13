<template>
  <div>
    <div class="homePage">
      <div class="activeRule"></div>
      <div class="share"></div>
      <div class="startGame"></div>
      <div class="pointExchange"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
//  hooks写法
import { onMounted } from 'vue'
import homehooks from '@/hooks/homehooks'
const { res, testEnv2 } = homehooks()
onMounted(() => {
  testEnv2()
})
</script>

<style lang="less" scoped>
.homePage {
  width: 100%;
  height: 1332px;
  background: url(./img/homePage.png) no-repeat;
  background-size: 100%;
  position: relative;
  .activeRule {
    width: 60px;
    height: 60px;
    // background: #000;
    border-radius: 50%;
    position: absolute;
    top: 120px;
    left: 20px;
  }
  .share {
    width: 60px;
    height: 60px;
    // background: rgb(206, 198, 198);
    border-radius: 50%;
    position: absolute;
    top: 120px;
    right: 20px;
  }
  .startGame {
    width: 250px;
    height: 90px;
    position: absolute;
    top: 950px;
    left: 90px;
    // background: #000;
    border-radius: 40px;
  }
  .pointExchange {
    width: 250px;
    height: 90px;
    position: absolute;
    top: 950px;
    right: 90px;
    // background: #000;
    border-radius: 40px;
  }
}
</style>
