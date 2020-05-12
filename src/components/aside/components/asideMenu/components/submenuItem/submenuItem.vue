<template>
  <div class="submenu-item-wrapper">
    <template v-if="hasChildren(item.Children)">
      <el-submenu :index="item.Path">
        <template slot="title">
          <i :class="item.Meta.Icon"></i>
          <span>{{item.Meta.Title}}</span>
        </template>
        <el-menu-item v-for="itemChildren in item.Children" :index="itemChildren.Path" :key="itemChildren.key">
          <i :class="itemChildren.Meta.Icon"></i>
          <span>{{itemChildren.Meta.Title}}</span>
        </el-menu-item>
      </el-submenu>
    </template>

    <template v-else>
      <el-menu-item :index="item.Path">
        <i :class="item.Meta.Icon"></i>
        <span>{{item.Meta.Title}}</span>
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