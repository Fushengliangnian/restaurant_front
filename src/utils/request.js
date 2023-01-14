import axios from 'axios'
// import {MessageBox, Message} from 'element-ui'
import { showConfirmDialog, showNotify } from 'vant'

// import store from '@/store'
// import { getToken } from '@/utils/auth'

function showDialog(message) {
  showConfirmDialog({
    title: '需要登录',
    theme: 'round-button',
    message: message || 'Error'
  }).then(() => {
    // on confirm
  }).catch(() => {
    // on cancel
  })
}

function showDangerNotify(message) {
  showNotify({ message: message, type: 'danger' })
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    //   config.headers['Authorization'] = `Bearer ` + `${getToken()}`
    // }
    console.log('============request sent============')
    console.log({ url: config.url, params: config.params, data: config.data })
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

  /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
  response => {
    const res = response.data
    console.log(res) // for debug

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      // Message({
      //     message: res.message || 'Error',
      //     type: 'error',
      //     duration: 5 * 1000
      // })
      showDangerNotify(res.message)

      // showDialog(res.message)
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        showDialog(res.message)
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    showDangerNotify(error.message)
    // Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
