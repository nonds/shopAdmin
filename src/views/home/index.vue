<template>
  <h2 class="title">
    首页
  </h2>
  <h2>{{ store.state.count }}</h2>
</template>
<script setup lang="ts">
import { useStore } from '@/store'
import { getLoginInfo } from '@/api/common'
import { IUserInfo } from '@/api/types/common'
import { ref } from 'vue'
const store = useStore()
// 获取用户信息一般都在用户登录的时候获取 应该写到登录接口位置
const useInfo = ref<IUserInfo | null>(null)
useInfo.value = await getLoginInfo()
console.log(useInfo.value)
store.commit('setUserInfo', {
  ...useInfo.value,
  token: '9e650277-2550-4784-b241-84229b5eebd6'
})
</script>
<style lang="scss" scoped>

</style>
