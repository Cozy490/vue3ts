<template>
  <div class="comtainer">
    <!-- {{res}} -->
    <audio controls src="http://music.163.com/song/media/outer/url?id=1908673805.mp3">
      <source type="audio/mpeg">
    </audio>
    试试
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
.comtainer{
  font-family: 'youai';
}
</style>
