// 公用声明类型
export interface ILogin {
  username: string,
  user_id: number,
  id: number,
  point: number,
  mobile: string,
  is_mobile_valid: boolean,
  is_email_valid: boolean,
  is_active: number,
  gift_amount: number,
  email: string,
  delivery_card_expire_days: number,
  current_invoice_id: number,
  current_address_id: number,
  brand_member_new: number,
  balance: number,
  avatar: string,
  __v: number
}
export interface ICaptchaInfo {
    status: number,
    code: string
}

export interface IloginPram {
    username:string
    password:string
    captcha_code:string
}

export interface IUserInfo {
    username: string,
    user_id: number,
    id: number,
    point: number,
    mobile: string,
    is_mobile_valid: boolean,
    is_email_valid: boolean,
    is_active: number,
    gift_amount: number,
    email: string,
    delivery_card_expire_days: number,
    current_invoice_id: number,
    current_address_id: number,
    brand_member_new: number,
    balance: number,
    avatar: string,
    __v: number
}
