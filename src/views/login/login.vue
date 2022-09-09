<template>
  <div class="login">
    <el-card class="login-card">
      <div slot="header">
        <span>XX系统欢迎您</span>
      </div>
      <login-form @on-success-valid="loginFun" ref="loginForm" />
      <p class="login-tip">输入任意用户名和密码即可</p>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import LoginForm from '_c/loginForm';

export default {
  name: 'login',
  components: { LoginForm },
  methods: {
    ...mapActions('user', ['login']),
    loginFun(datas) {
      this.$refs.loginForm.loading = true;
      this.login(datas) 
        .then(() => {
          this.$router
            .push({
              path: this.$config.layoutPath
            })
            .catch(() => {});
          this.$refs.loginForm.loading = false;
        })
        .catch(() => {
          this.$refs.loginForm.loading = false;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img/login.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  &-card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    //定义转换，在Y轴根据值上下移动，在X轴左右移动
    transform: translateY(-60%) translateX(70%);
    //transform: translateY(-150px) translateX(-180px);

    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
</style>
