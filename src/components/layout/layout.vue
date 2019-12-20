<template>
  <el-container class="container">
    <aside />

    <el-container>
      <el-header class="container-header">
        <div class="global-header">
          <!-- <span class="global-header-trigger" @click="triggerMenu">
            <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"></i>
          </span> -->
        </div>
      </el-header>
      <el-main>
        内容
      </el-main>
      <el-footer>
        底部
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '_c/aside';

export default {
  name: 'layout',
  components: { Aside },
  data() {
    return {};
  },
  mounted() {
    console.log('哈哈哈，欢迎来到首页！');
  },
  methods: {
    // triggerMenu() {
    //   this.isCollapse = !this.isCollapse;
    //   this.asideWidth = this.isCollapse ? '65px' : '260px';
    // }
  }
};
</script>

<style lang="less">
@import url('./layout.less');
</style>
