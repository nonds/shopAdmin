<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
import { useStore } from '@/store'
const store = useStore()
console.log(store)
</script>
<style lang="scss" scoped>
.el-aside {
    background-color: $sidebgcolor;
    color: #333;
    width:auto;
}
.el-header {
    background-color: #fff;
    color: #333;
    width: 100%;
    height: 60px;
}
.el-main {
    background-color: #e9eef3;
    color: #333;
    width: 100%;
}

.el-container {
    height: 100vh;
}
</style>
