<template>
  <Form ref="loginform" :model="form" :rules="rules">
    <FormItem prop="userName">
      <Input type="text" v-model="form.userName" prefix="ios-person" placeholder="请输入用户名" />
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" prefix="ios-lock" placeholder="请输入密码" :password="true" />
    </FormItem>
    <FormItem>
      <Button type="primary" @click="loginFun" long class="login-form-login-btn" icon="ios-log-in">登陆</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'login-form',
  props: {
    userNameRules: {
      type: Array,
      //默认值是一个工厂函数返回对象
      default: () => {
        return [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ];
      }
    },
    passwordRules: {
      type: Array,
      //默认值是一个工厂函数返回对象
      default: () => {
        return [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ];
      }
    }
  },
  data() {
    return {
      form: {
        userName: 'admin',
        password: 'admin'
      }
    };
  },
  //计算属性
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  //方法
  methods: {
    loginFun() {
      this.$refs.loginform.validate(valid => {
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

<style lang="less">
@import './login-form.less';
</style>
