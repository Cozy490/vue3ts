/**
 * 集成Abstract
 * @date 2022-5-26
 */
import Abstract from '../abstract'
import {
  AuthLoginType
} from '../types'
import { Iobject } from '@/utils/commonInterface'

class Basic extends Abstract {
  /**
      * 登录
      * @param {string} account 用户
      * @param {string} password 密码
      * @param {string} captchaCode 图形码
      * @param {string} captchaCodeToken 图形码token
      */
  authLogin (data: AuthLoginType|Iobject) {
    return this.postReq({ url: 'api/login', data })
  }
}

// 单列模式返回对象
let instance
export default (() => {
  if (instance) return instance
  instance = new Basic()
  return instance
})()
