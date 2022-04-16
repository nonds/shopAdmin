import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IUserInfo } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'
const state = {
  count: 0,
  isCollapse: false,
  userInfo: getItem<{token:string} & IUserInfo>(USER)
}
export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')
// 创建一个新的 store 实例
export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    setUserInfo (state, payload) {
      state.userInfo = payload
      setItem(USER, state.userInfo)
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
