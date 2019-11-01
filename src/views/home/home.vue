<template>
  <Layout class="layout">
    <Sider breakpoint="md" ref="sider" hide-trigger collapsible :width="260" :collapsed-width="80" v-model="isCollapsed">
      <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClass">
        <MenuItem name="1-1">
        <Icon type="ios-settings"></Icon>
        <span>菜单管理</span>
        </MenuItem>
        <MenuItem name="1-2">
        <Icon type="ios-search"></Icon>
        <span>用户管理</span>
        </MenuItem>
        <MenuItem name="1-3">
        <Icon type="ios-navigate"></Icon>
        <span>角色管理</span>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Header class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
      </Header>
      <Content :style="{margin: '20px', background: '#fff', minHeight: '300px'}">
        Content
      </Content>
      <Footer>
        Footer
      </Footer>
    </Layout>
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false    //侧边栏是否收起
    };
  },
  computed: {
    //通过计算属性，控制菜单展开/收起的样式
    menuitemClass() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    },
    //通过计算属性，控制菜单展开/收起图标的样式
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
