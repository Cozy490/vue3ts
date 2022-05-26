/**
 * axios基础构建
 * @date 2022-5-27
 */

// import getUrl from './config'
// import storage from '@/utils/storage'
import instance from './intercept'
import { AxiosRequest, CustomResponse } from './types'
import { Iobject } from '@/utils/commonInterface'
import { Toast } from 'vant'

class Abstract {
     protected baseURL: string = process.env.VUE_APP_BaseURL;
     protected headers: Iobject = {
       ContentType: 'application/json;charset=UTF-8'
     }

     private apiAxios ({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType }: AxiosRequest): Promise<Iobject> {
       Object.assign(headers, {
         //  token: storage().get('token') || storage('localstorage').get('token'),
         //  'x-language': storage('localstorage').get('i18n')
       })

       // url解析 暂不用api接口查询字典
       //  const _url = (url as string).split('.')
       //  url = getUrl(_url[0], _url[1])
       //  console.log(_url[0], '2222', _url[1])
       //  alert(url)
       return new Promise((resolve, reject) => {
         instance({
           baseURL,
           headers,
           method,
           url,
           params,
           data,
           responseType
         }).then((res) => {
           // 200:服务端业务处理正常结束
           if (res.data.status === 200) {
             if (Object.keys(res.data.data).length === 0) {
               Toast('暂无数据')
             } else {
               //  alert(JSON.stringify(res.data.data))
               resolve(res.data.data)
             }
           } else {
             resolve({ status: false, message: res.data?.errorMessage || (url + '请求失败3'), data: null || {} })
           }
           //  目前数据有问题，等有正式数据在修改
         }).catch((err) => {
           const message = err?.data?.errorMessage || err?.message || (url + '请求失败4')
           Toast(`${message}2222`)
           // eslint-disable-next-line
                 reject({ status: false, message, data: null});
         })
       })
     }

     /**
      * GET类型的网络请求
      */
     protected getReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
       return this.apiAxios({ baseURL, headers, method: 'GET', url, data, params, responseType })
     }

     /**
      * POST类型的网络请求
      */
     protected postReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
       return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType })
     }

     /**
      * PUT类型的网络请求
      */
     protected putReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
       return this.apiAxios({ baseURL, headers, method: 'PUT', url, data, params, responseType })
     }

     /**
      * DELETE类型的网络请求
      */
     protected deleteReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
       return this.apiAxios({ baseURL, headers, method: 'DELETE', url, data, params, responseType })
     }
}

export default Abstract
