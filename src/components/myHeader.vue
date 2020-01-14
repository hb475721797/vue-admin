<template>
  <div class="my-header">
    <div class="header-left">
      <div class="header-left-icon">
        <i class="el-icon-s-operation"/>
      </div>
      <div class="header-left-breadcrumb">
        <el-breadcrumb class="my-breadcrumb" separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="header-right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <div class="el-dropdown-link-avatar">
            <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                 alt="头像">
          </div>
          <div class="el-dropdown-link-icon">
            <i class="el-icon-caret-bottom"></i>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myHeader"
  }
</script>

<style scoped lang="stylus">
  .my-header
    height 50px
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08)
    display flex
    align-items center
    justify-content space-between

    .header-right
      margin-right 20px
      display flex
      justify-content center
      align-items center

      .el-dropdown-link
        display flex
        justify-content space-between
        align-items center

        &:hover
          cursor pointer

        .el-dropdown-link-avatar
          height 40px
          width 40px

          img
            border-radius 50%
            width 100%

        .el-dropdown-link-icon
          height 40px
          display flex
          justify-content center
          align-items flex-end
          font-size 10px
          margin-left 5px


    .header-left
      display flex
      height 100%
      width 100%

      .header-left-icon
        display flex
        align-items center
        justify-content center
        font-weight 100
        font-size 20px
        padding 0 15px
        transition background .3s
        color #444

        &:hover
          cursor pointer
          background rgba(0, 0, 0, .025)

      .header-left-breadcrumb
        display flex
        justify-content center
        align-items center
        padding 0 10px

        >>> .el-breadcrumb__inner
          font-weight 450
          color #555

        >>> a
          font-weight 450
          color #555


</style>
