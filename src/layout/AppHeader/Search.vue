<template>
  <el-input
    v-model="searchModel"
    class="searInput"
    placeholder="请输入内容"
    :prefix-icon="Search"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Search
} from '@element-plus/icons-vue'

const searchModel = ref('')
</script>
<style lang="scss" scoped>
.searInput{
    margin-right: 20px;
    height: 30px;
}
.searInput {
  ::v-deep input {
       height: 30px;
    }
}
</style>
