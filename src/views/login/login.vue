<template>
  <div class="login">
    <el-card class="login-card">
      <div slot="header">
        <span>XX系统欢迎您</span>
      </div>
      <el-input placeholder="请输入用户名" ></el-input>

    </el-card>

    <!-- <div class="login-card">
      <Card icon="ios-log-in" title="" :bordered="false">
        <div class="form-card">
          <login-form @on-success-valid="loginFun"></login-form>
        </div>
      </Card>
    </div> -->
  </div>
</template>

<script>
// import loginform from '_c/login-form';
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'login',
  components: {
    // 'login-form': loginform
  },
  methods: {
    loginFun(datas) {
      this.$router.push({ path: 'home' });
      // axios({
      //   // `method` 是创建请求时使用的方法
      //   method: 'POST',
      //   // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL。注：指定proxyTable后， axios就不需要指定baseUrl了。proxy会把base + '/api/c/xx'代理到【base baseUrl + '/api/c/xx'】的接口地址上。
      //   baseURL: '/api/',
      //   // baseURL: 'http://140.143.237.11:9093/api/',
      //   // `url` 是用于请求的服务器 URL
      //   url: '/test/GetNames',
      //   // `data` 是作为请求主体被发送的数据
      //   // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
      //   // 在没有设置 `transformRequest` 时，必须是以下类型之一：
      //   // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      //   // - 浏览器专属：FormData, File, Blob
      //   // - Node 专属： Stream
      //   data: {
      //     userName: datas.userName,
      //     password: datas.password
      //   },
      //   // `headers` 是即将被发送的自定义请求头
      //   headers: {
      //     'X-Requested-With': 'XMLHttpRequest'
      //   }
      // })
      //   .then(response => {
      //     //请求成功的回调函数
      //     console.log(response.data)
      //   })
      //   .catch(error => {
      //     //请求异常的回调函数
      //     console.log(error)
      //   })
      // axios({
      //   // `method` 是创建请求时使用的方法
      //   method: 'GET',
      //   // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL。注：指定proxyTable后， axios就不需要指定baseUrl了。proxy会把base + '/api/c/xx'代理到【base baseUrl + '/api/c/xx'】的接口地址上。
      //   // baseURL: 'http://140.143.237.11:9093/',
      //   // `url` 是用于请求的服务器 URL
      //   url: '/api/test/hello'
      // })
      //   .then(response => {
      //     //请求成功的回调函数
      //     console.log(response.data)
      //   })
      //   .catch(error => {
      //     //请求异常的回调函数
      //     console.log(error)
      //   })
    }
  }
};
</script>

<style lang="less">
@import './login.less';
</style>