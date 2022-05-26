import { ref } from 'vue'
import { orderApi } from '@/api/index'
const homehooks = () => {
  const res = ref({})
  const testEnv2 = async () => {
    try {
      const data = {
        id: 0
      }
      res.value = await orderApi.orderList(data)
      console.log(res, '-----')
    } catch (error) {
    // alert(JSON.stringify(error))
    }
  }
  return {
    res,
    testEnv2
  }
}

export default homehooks
