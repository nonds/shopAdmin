<template>
  <h2>首页</h2>
  <h2>{{ store.state.count }}</h2>
</template>
<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
console.log(store.state.count)
</script>
<style lang="sass" scoped></style>
