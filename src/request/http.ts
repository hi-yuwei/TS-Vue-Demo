import axios from "axios"
import ecode from "@/utils/ecode"
import token from "@/utils/token"
// import Message from "@/components/Message"

// 新建一个 axios 实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 1000 * 30,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json"
  }
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers.token = token.getToken()
    return config
  },
  error => Promise.reject(error)
)

// 添加响应拦截器
instance.interceptors.response.use(
  // 响应成功
  res => {
    if (res.status === 200) {
      let { code, message } = res.data

      if (code === 401) {
        // token失效 或者被挤下线
        setTimeout(() => {
          token.removeToken()
          window.dsBridge.call("exitLogin", { userClick: false }, () => {})
        }, 1000)
      }

      if (code in ecode) {
        // Message.error(`${message || ecode[code]}`)
        return Promise.reject(res.data)
      }

      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    console.log(1111)
    const { response } = error
    if (response) {
      // 收到响应，但是不在2xx的范围
      let code = response.status
      if (code in ecode) {
        // Message.error(`${ecode[code]}`)
      }
      return Promise.reject(response)
    } else {
      // 请求超时或断网时
      // Message.error("Please check the network connection!")
    }
  }
)

export default instance
