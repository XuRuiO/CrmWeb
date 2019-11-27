<template>
  <el-container class="container">
    <el-aside width="260px" class="container-aside">
      <el-scrollbar style="height:100%;">
        <div class="aside-logo-wrapper">
          <img :src="logo">
        </div>
        <div class="aside-menu-wrapper">
          <el-menu default-active="1-1" class="el-menu-vertical" background-color="#001529" text-color="#ffffffa6" active-text-color="#fff" unique-opened >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>
                <span>内容管理</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-tickets"></i>
                <span>评论管理</span>
              </el-menu-item>
              <el-menu-item index="1-3">
                <i class="el-icon-attract"></i>
                <span>举报管理</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-coordinate"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-collection-tag"></i>
                <span>新增用户</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-film"></i>
                <span>活跃用户</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-suitcase"></i>
                <span>统计分析</span>
              </template>
              <el-menu-item index="3-1">
                <i class="el-icon-suitcase"></i>
                <span>新增和启动</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-suitcase"></i>
                <span>活跃分析</span>
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-suitcase"></i>
                <span>时段分析</span>
              </el-menu-item>
              <el-menu-item index="3-4">
                <i class="el-icon-suitcase"></i>
                <span>新增和启动</span>
              </el-menu-item>
              <el-menu-item index="3-5">
                <i class="el-icon-suitcase"></i>
                <span>活跃分析</span>
              </el-menu-item>
              <el-menu-item index="3-6">
                <i class="el-icon-suitcase"></i>
                <span>时段分析</span>
              </el-menu-item>
              <el-menu-item index="3-7">
                <i class="el-icon-suitcase"></i>
                <span>新增和启动</span>
              </el-menu-item>
              <el-menu-item index="3-8">
                <i class="el-icon-suitcase"></i>
                <span>活跃分析</span>
              </el-menu-item>
              <el-menu-item index="3-9">
                <i class="el-icon-suitcase"></i>
                <span>时段分析</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-suitcase"></i>
                <span>统计分析</span>
              </template>
              <el-menu-item index="4-1">
                <i class="el-icon-suitcase"></i>
                <span>新增和启动</span>
              </el-menu-item>
              <el-menu-item index="4-2">
                <i class="el-icon-suitcase"></i>
                <span>活跃分析</span>
              </el-menu-item>
              <el-menu-item index="4-3">
                <i class="el-icon-suitcase"></i>
                <span>时段分析</span>
              </el-menu-item>
              <el-menu-item index="4-4">
                <i class="el-icon-suitcase"></i>
                <span>新增和启动</span>
              </el-menu-item>
              <el-menu-item index="4-5">
                <i class="el-icon-suitcase"></i>
                <span>活跃分析</span>
              </el-menu-item>
              <el-menu-item index="4-6">
                <i class="el-icon-suitcase"></i>
                <span>时段分析</span>
              </el-menu-item>
              <el-menu-item index="4-7">
                <i class="el-icon-suitcase"></i>
                <span>新增和启动</span>
              </el-menu-item>
              <el-menu-item index="4-8">
                <i class="el-icon-suitcase"></i>
                <span>活跃分析</span>
              </el-menu-item>
              <el-menu-item index="4-9">
                <i class="el-icon-suitcase"></i>
                <span>时段分析</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="container-header" height="69px">
        <div class="global-header">
          <span class="global-header-trigger" @click="triggerMenu">
            <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"></i>
          </span>
        </div>
      </el-header>
      <el-main>
        内容
      </el-main>
      <el-footer>
        底部
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import logo from '@/assets/img/ruiO.png';

export default {
  data() {
    return {
      logo: logo,
      isCollapse: true,
      asideWidth: '68px'
    };
  },
  methods: {
    triggerMenu() {
      // this.isCollapse = !this.isCollapse;
      // this.asideWidth = this.isCollapse ? '65px' : '260px';
    }
  }
};
</script>

<style lang="less">
@import url('./home.less');
</style>
