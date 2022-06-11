<template>
  <div>
    {{res}}
    sdssfdfd
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
