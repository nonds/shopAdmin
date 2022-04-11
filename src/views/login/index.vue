<template>
  <h2>login</h2>
</template>
<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from '@vue/runtime-core'

const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
  getLoginInfo().then(data => {
    console.log(data)
    list.value = data.slide
  })
})
</script>
<style lang="scss" scoped>
</style>
