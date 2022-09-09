<template>
  <div class="submenu-item-wrapper">
    <template v-if="hasChildren(item.children)">
      <el-submenu :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item v-for="itemChildren in item.children" :index="itemChildren.path" :key="itemChildren.key">
          <i :class="itemChildren.meta.icon"></i>
          <span>{{itemChildren.meta.title}}</span>
        </el-menu-item>
      </el-submenu>
    </template>

    <template v-else>
      <el-menu-item :index="item.path">
        <i :class="item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'submenuItem',
  props: {
    //菜单路由数据
    item: {
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
    //验证是否存在子集菜单
    hasChildren(children = []) {
      return children.length > 0;
    }
  }
};
</script>

<style lang="less">
// 解决菜单折叠，el-submenu的样式问题
.el-menu--collapse > .submenu-item-wrapper {
  .el-menu-item span,
  .el-submenu > .el-submenu__title span,
  .el-menu-item .el-submenu__icon-arrow,
  .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}
</style>

<style lang="less" scoped>
@import url('./submenuItem.less');
</style>