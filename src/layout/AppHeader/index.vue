<template>
  <div class="header-left">
    <ToggleSidebar />
    <Breadcrumb />
  </div>
  <div class="header-right">
    <Search />
    <FullScreen />
    <Bell />
    <userDropdown />
  </div>
</template>
<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
import Search from './Search.vue'
import Bell from './MessageBell.vue'
import userDropdown from './UserDropdown.vue'
</script>
<style lang="scss" scoped>
.header-left{
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
.header-right{
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
</style>
