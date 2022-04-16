<template>
  <el-icon>
    <component
      :is="collapseIcon"
      @click="changeColle()"
    />
  </el-icon>
</template>
<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'
import {
  Expand,
  Fold
} from '@element-plus/icons-vue'
const store = useStore()
const collapseIcon = computed(() => {
  return store.state.isCollapse ? Expand : Fold
})
const changeColle = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
<style lang="scss" scoped>
.el-icon{
    margin-right: 10px;
}
</style>
