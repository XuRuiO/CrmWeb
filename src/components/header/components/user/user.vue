<template>
  <div class="header-navs-user">
    <el-dropdown class="user-dropdown" trigger="click">
      <el-badge is-dot class="dropdown-badge">
        <el-avatar class="badge-avatar" :size="large" :src="userAvatar" />
      </el-badge>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          消息中心
          <el-badge class="infomation-center" :value="3" />
        </el-dropdown-item>
        <el-dropdown-item>个人资料</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import userAvatar from '@/assets/img/user-avatar-01.jpg';

export default {
  name: 'user',
  data() {
    return {
      userAvatar: userAvatar
    };
  },
  methods: {
    //
  }
};
</script>

<style lang="less" scoped>
@import url('./user.less');
</style>

<style lang="less">
</style>