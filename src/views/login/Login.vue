<template>
  <div class="login">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :maxlength="11"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>

  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref } from 'vue'
import { Form, Field, Button, CellGroup, Toast } from 'vant'
import { basicApi } from '@/api/index'
import { Iobject } from '@/utils/commonInterface'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast
  },
  setup () {
    // const { ctx } = getCurrentInstance()

    const state = reactive({
      count: 0
    })
    const username = ref('')
    const password = ref('')
    const userNames = ref('')
    const router = useRouter()
    const onSubmit = async (values:Iobject) => {
      console.log('submit', values)
      try {
        const data = {
          ...values
        }
        const { code, userName, msg } = await basicApi.authLogin(data)
        if (code === 200) {
          userNames.value = userName
          Toast(msg)
          Cookies.set('username', userNames.value, { expires: 1 })
          router.push({ path: '/about' })
        }
      } catch (error) {
        // Toast(error)
        // alert(JSON.stringify(error))
      }
    }

    return {
      ...toRefs(state),
      username,
      password,
      onSubmit
    }
  }
}
</script>

<style lang="less" scoped>
// input{
//   list-style: none;
// }
::v-deep .van-form{
  background-color: #fff !important;
  padding: 40px 0;
  border-radius: 40px;
}
.login{
  width: 100%;
  height: 100vh;
  padding: 400px 40px 0;
  box-sizing: border-box;
  background-color: #eee;

}
</style>
