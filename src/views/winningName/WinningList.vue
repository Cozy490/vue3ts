<template>
  <div class="container">
    <img src="./img/winninglistbg.png" alt="">
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
.container{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>
