<template>
  <el-form ref="loginForm" :model="form" :rules="rules" label-width="0px">
    <el-form-item prop="userName">
      <el-input v-model="form.userName" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" type="password" show-password prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginFun" class="login-form-login-btn" :loading="loading">登陆</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'loginForm',
  data() {
    return {
      form: {
        userName: 'admin',
        password: '123456'
      },
      rules: {
        userName: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      },
      loading: false
    };
  },
  //方法
  methods: {
    loginFun() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let datas = {
            userName: this.form.userName,
            password: this.form.password
          };

          //子组件触发父组件on-success-valid对应的方法名字，并将参数传递过去
          this.$emit('on-success-valid', datas);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import './loginForm.less';
</style>
