<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="default"
      @submit.prevent="hanleSubmit"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="user.username"
          placeholder="请输入用户名"
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="user.password"
          placeholder="请输入密码"
          type="password"
          :prefix-icon="Unlock"
        />
      </el-form-item>
      <el-form-item prop="captcha_code">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.captcha_code"
            placeholder="请输入验证码"
            :prefix-icon="Key"
          />
          <img
            class="imgcode"
            :src="imgCodeSrc"
            alt=""
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { getCaptcha, Login } from '@/api/common'
import { base64toBlob } from '@/utils/Blob'
import {
  User,
  Unlock,
  Key
} from '@element-plus/icons-vue'
import type { IElForm, IFormRule } from '@/types/element-plus'
import { useRouter, useRoute } from 'vue-router'
const user = reactive({
  username: 'admin',
  password: '123456',
  captcha_code: ''
})
const loading = ref(false)
const form = ref<IElForm | null>(null)
const imgCodeSrc = ref('')
const router = useRouter()
const route = useRoute()
const rules = ref<IFormRule>({
  username: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  captcha_code: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

const hanleSubmit = async () => {
  const valid = await form.value?.validate()
  if (!valid) {
    return false
  }
  loading.value = true
  await Login(user).finally(() => {
    loading.value = false
  })

  let redirect = route.query.redirect || '/'
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}
// const list = ref<ILoginInfo['slide']>([])

const loadCaptcha = async () => {
  const res = await getCaptcha()
  const baseBlob = base64toBlob(res.code)
  console.log(baseBlob)
  imgCodeSrc.value = URL.createObjectURL(baseBlob)
  console.log(imgCodeSrc.value)
}
onMounted(() => {
  loadCaptcha()
})
</script>
<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;

  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }

  .imgcode-wrap {
    display: flex;
    align-items: center;

    .imgcode {
      height: 37px;
      margin-left: 30px;
    }
  }
}
</style>
