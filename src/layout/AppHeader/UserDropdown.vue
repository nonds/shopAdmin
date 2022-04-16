<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handlelogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import {
  ArrowDown
} from '@element-plus/icons-vue'
import { LoginOut } from '@/api/common'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
const router = useRouter()
const store = useStore()
const handlelogout = () => {
  ElMessageBox.confirm('确认退出吗？', {}).then(async () => {
    ElMessage({
      type: 'success',
      message: '退出成功'
    })
    await LoginOut()
    router.push({
      name: 'Login'
    })
    // 清除本地存储
    store.commit('setUserInfo', null)
  }).catch(() => {
    ElMessage({
      type: 'warning',
      message: '已取消退出'
    })
  })
}
</script>
<style lang="scss" scoped>
.el-dropdown{
    width: 120px;
}
</style>
