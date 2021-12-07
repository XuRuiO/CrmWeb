<template>
  <div class="aside-menu-wrapper">
    <el-menu default-active="/dashboard" background-color="#001529" text-color="#ffffffa6" active-text-color="#fff" unique-opened :collapse="isCollapse" @select="handleSelect">
      <submenu-item v-for="item in routers" v-bind:key="item.Id" :item="item" />
    </el-menu>
  </div>
</template>

<script>
import { SubmenuItem } from './components';

export default {
  name: 'asideMenu',
  components: {
    SubmenuItem
  },
  props: {
    //菜单导航切换
    isCollapse: {
      type: Boolean,
      default: false
    },
    //菜单路由数据
    routers: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      //
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({ path: key });
    }
  }
};
</script>

<style lang="less" scoped>
@import url('./asideMenu.less');
</style>