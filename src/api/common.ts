/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { ILogin, ICaptchaInfo, IloginPram, IUserInfo } from '@/api/types/common'

// 获取验证码
export const getCaptcha = () => {
  return request<ICaptchaInfo>({
    method: 'POST',
    url: '/v1/captchas',
    data: {
      stamp: Date.now()
    }
  })
}

// 登录
export const Login = (data:IloginPram) => {
  return request<ILogin>({
    method: 'POST',
    url: '/v2/login',
    data
  })
}
// 获取管理员信息

export const getLoginInfo = () => {
  return request<IUserInfo>({
    method: 'GET',
    url: 'v1/user'
  })
}

// 用户退出
export const LoginOut = () => {
  return request({
    method: 'GET',
    url: 'v2/signout'
  })
}
