<template>
  <div class="header-navs-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-edit breadcrumb-icon"></i>
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="less" scoped>
@import url('./breadcrumb.less');
</style>