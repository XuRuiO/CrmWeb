<template>
  <div class="aside-logo-wrapper">
    <router-link to="/">
      <img class="wrapper-img" :class="{'active':isCollapse}" :src="logo" :width="logoWidth">
    </router-link>
  </div>
</template>

<script>
import logo from '@/assets/img/ruiO.png';

export default {
  name: 'asideLogo',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: logo
    };
  },
  computed: {
    logoWidth() {
      return this.isCollapse ? '65px' : 'auto';
    }
  }
};
</script>

<style lang="less" scoped>
@import url('./asideLogo.less');
</style>