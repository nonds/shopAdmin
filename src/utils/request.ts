import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { store } from '@/store'

// 创立个实例 不会影响到axios本身
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URl
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.userInfo
  if (user && user.token) {
    // config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误
  console.log(response.data)
  if (response.data.status !== 1) {
    ElMessage({
      showClose: true,
      message: response.data.message || '请求失败，请稍后重试',
      type: 'warning'
    })
    return Promise.reject(response.data)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

//
export default <T = any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
