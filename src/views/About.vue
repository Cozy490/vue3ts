<template>
  <div class="d">
    <van-button type="primary" @click="testEnv2">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue'
import { basicApi, orderApi } from '@/api/index'
import { Button } from 'vant'

export default {
  name: 'About',
  components: {
    [Button.name]: Button
  },
  setup () {
    onMounted(() => {
      testEnv()
      // testEnv2()
    })
    const state = reactive({
      count: 0
    })
    const testEnv = () => {
      // alert(process.env.NODE_ENV)
      basicApi.authLogin({}).catch(err => {
        // alert(1111)
        console.log(err)
      })
      // alert(process.env.VUE_APP_BaseURL)
    }
    const testEnv2 = async () => {
      try {
        const data = {
          id: 0
        }
        const res = await orderApi.orderList(data)
        console.log(res, '-----')
      } catch (error) {
        // alert(JSON.stringify(error))
      }
      // alert(process.env.VUE_APP_BaseURL)
    }
    return {
      ...toRefs(state),
      testEnv,
      testEnv2
    }
  }
}
</script>

<style lang="less" scoped>
.d{
  width: 750px;
  height: 300px;
  background-color: aqua;
}

</style>
