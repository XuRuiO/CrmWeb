<template>
  <div :class="{'header-navs-search-active':active}" class="header-navs-search">
    <i class="el-icon-search navs-search-icon" @click="searchActiveToggle"></i>
    <el-select ref="headerSearchSelect" v-model="search" :remote-method="querySearch" class="navs-search-select" @change="change" placeholder="搜索" filterable default-first-option remote>
      <el-option v-for="item in options" :key="item.path" :value="item" :label="item.title.join(' > ')" />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      search: '',
      options: [],
      active: false
    };
  },
  methods: {
    //搜索Icon图标点击事件，切换css样式，控制是否显示搜索框
    searchActiveToggle() {
      this.active = !this.active;
      if (this.active) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus();
      }
    },
    //远程搜索方法
    querySearch() {
      //
    },
    //选中值发生变化时触发
    change() {
      //
    }
  }
};
</script>

<style lang="less" scoped>
@import url('./search.less');
</style>