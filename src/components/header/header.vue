<template>
  <el-header class="container-header" height="100px">
    <div class="global-header-navs">
      <Hamburger :is-collapse="aside.isCollapse" @triggerMenu="toggleAside" />
      <Breadcrumb />
      <div class="navs-right-menu">
        <Search />
        <Information />
        <User />
      </div>
    </div>
    <div class="global-header-tags">
    </div>
  </el-header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Hamburger, Breadcrumb, Search, User } from './components';

export default {
  name: 'header',
  components: {
    Hamburger,
    Breadcrumb,
    Search,
    User
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState({
      aside: state => state.app.aside
    })
  },
  methods: {
    //使用解构运算符，提取方法
    ...mapActions('app', ['commitSetAside']),
    toggleAside() {
      this.commitSetAside();
    }
  }
};
</script>

<style lang="less" scoped>
@import url('./header.less');
</style>