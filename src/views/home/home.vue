<style lang="less">
.layout {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Sider hide-trigger>
        <Menu>
          <Submenu>
            <template slot="title">
                <Icon type="ios-cog" />
                Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <!-- <Layout>
        <Header>
          
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout> -->
    </Layout>
  </div>
</template>

<script>
export default {};
</script>
