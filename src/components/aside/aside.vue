<template>
  <el-aside :width="asideWith" class="container-aside">
    <el-scrollbar style="height:100%;">
      <!-- 菜单顶部logo -->
      <aside-logo :is-collapse="aside.isCollapse" />
      <!-- 菜单 -->
      <aside-menu :is-collapse="aside.isCollapse" />
    </el-scrollbar>
  </el-aside>
</template>

<script>
import { mapState } from 'vuex';
import { AsideLogo, AsideMenu } from './components';

export default {
  name: 'aside',
  components: {
    AsideLogo,
    AsideMenu
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState({
      aside: state => state.app.aside
    }),
    //设置菜单折叠起来的宽度
    asideWith() {
      return this.aside.isCollapse ? '65px' : '260px';
    }
  },
  methods: {
    //
  }
};
</script>

<style lang="less" scoped>
@import url('./aside.less');
</style>