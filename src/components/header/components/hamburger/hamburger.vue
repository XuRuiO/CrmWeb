<template>
  <div class="header-navs-hamburger">
    <i :class="[isCollapse ?'el-icon-s-unfold':'el-icon-s-fold']" class="hamburger-icon" @click="triggerMenu"></i>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //
    };
  },
  methods: {
    triggerMenu() {
      this.$emit('triggerMenu');
    }
  }
};
</script>

<style lang="less" scoped>
@import url('./hamburger.less');
</style>