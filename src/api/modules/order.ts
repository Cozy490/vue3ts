import { OrderList } from '../types/order'
import { Iobject } from '@/utils/commonInterface'
import Abstract from '../abstract'
class Order extends Abstract {
  orderList (data: OrderList|Iobject) {
    return this.postReq({ url: '/api/orderList', data })
  }
}
// 单列模式返回对象
let instance
export default (() => {
  if (instance) return instance
  instance = new Order()
  return instance
})()
