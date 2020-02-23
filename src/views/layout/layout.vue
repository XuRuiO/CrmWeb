<template>
  <el-container class="container">
    <!-- 左侧菜单栏 -->
    <Aside />
    <el-container>
      <!-- 头部 -->
      <Header />
      <!-- 内容 -->
      <el-main>
        内容
        <router-view />
      </el-main>
      <!-- 底部 -->
      <el-footer>
        底部
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '_c/aside';
import Header from '_c/header';

export default {
  name: 'layout',
  components: {
    Aside,
    Header
  },
  data() {
    return {};
  },
  mounted() {
    //
  },
  methods: {
    // triggerMenu() {
    //   this.isCollapse = !this.isCollapse;
    //   this.asideWidth = this.isCollapse ? '65px' : '260px';
    // }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}
</style>
