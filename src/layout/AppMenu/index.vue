<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="$sidebgcolor"
    class="el-menu-vertical-demo"
    default-active="./"
    text-color="#fff"
    router
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item index="/">
      <el-icon>
        <icon-menu />
      </el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon>
          <Goods />
        </el-icon>
        <span>商品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/product/product_list">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>商品管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/product/product_classify">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>商品分类</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/product/product_attr">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>商品规格</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/product/product_reply">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>商品评论</span>
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon>
          <Document />
        </el-icon>
        <span>订单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/order/order_list">
          <template #title>
            <el-icon>
              <Goods />
            </el-icon>
            <span>订单列表 </span>
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon>
        <Film />
      </el-icon>
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon>
          <Setting />
        </el-icon>
        <span>权限</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/permission/role">
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>角色</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/permission/admin">
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>管理员</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/permission/rule">
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>权限规则</span>
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
<script setup lang="ts">
import {
  Goods,
  UserFilled,
  Document,
  Menu as IconMenu,
  Film,
  Setting
} from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from '@/store'
const store = useStore()
console.log(store.state.count)
const isCollapse = computed(() => {
  return store.state.isCollapse
})
const handleOpen = () => {
}
const handleClose = () => {
}
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item-group{
  ::v-deep ul{
    background: $sidebgcolor;
  }
}
.el-menu-item-group{
   background: $sidebgcolor;
}
</style>
