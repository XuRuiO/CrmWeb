<template>
  <div class="header-navs-information">
    <el-badge :value="100" :max="99" class="navs-information-badge">
      <i class="el-icon-bell information-badge-icon"></i>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: 'information',
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="less" scoped>
@import url('./information.less');
</style>