<template>
  <Layout class="layout">
    <Sider breakpoint="md" ref="sider" hide-trigger collapsible :width="260" :collapsed-width="80" v-model="isCollapsed" class="left-sider">
      <div class="side-logo-wrapper">
        <img :src="maxLogo" />
      </div>
      <div class="side-menu-wrapper">
        <Menu theme="dark" width="auto" accordion active-name="1-2" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />
              内容管理
            </template>
            <MenuItem name="1-1">
            <Icon type="md-leaf" />
            文章管理
            </MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              统计分析
            </template>
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </Submenu>
        </Menu>
      </div>
    </Sider>
    <Layout>
      <Header class="layout-header">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px',cursor: 'pointer'}" type="md-menu" size="24"></Icon>
      </Header>
      <!-- <Content :style="{margin: '20px', background: '#fff', minHeight: '300px'}">
        Content
      </Content>
      <Footer>
        Footer
      </Footer> -->
    </Layout>
  </Layout>
</template>
<script>
import maxLogo from '@/assets/img/ruiO.png';

export default {
  data() {
    return {
      isCollapsed: false, //侧边栏是否收起
      maxLogo: maxLogo
    };
  },
  computed: {
    //通过计算属性，控制左侧菜单展开/收起的样式
    menuitemClass() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    },
    //通过计算属性，控制左侧菜单展开/收起图标的样式
    rotateIcon() {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : ''];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.sider.toggleCollapse();
    }
  }
};
</script>

<style lang="less">
@import url('./home.less');
</style>
