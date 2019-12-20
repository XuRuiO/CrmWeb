<template>
  <div class="login">
    <el-card class="login-card">
      <div slot="header">
        <span>XX系统欢迎您</span>
      </div>
      <login-form @on-success-valid="loginFun" ref="loginform" />
      <p class="login-tip">输入任意用户名和密码即可</p>
    </el-card>
  </div>
</template>

<script>
import LoginForm from '_c/login-form';
import { login } from '@/api/login';

export default {
  name: 'login',
  components: { LoginForm },
  methods: {
    loginFun(datas) {
      login(datas)
        .then(res => {
          this.$refs.loginform.loading = false;
          if (res.statusCode === 200) {
            this.$router.push({ name: 'layout' });
          }
        })
        .catch(() => {
          this.$refs.loginform.loading = false;
        });
    }
  }
};
</script>

<style lang="less">
@import './login.less';
</style>