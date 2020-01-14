<template>
  <div class="logo">
    <div class="logo-img">
      <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="logo">
    </div>
    <div class="title">
      <span>Vue Admin Template</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "logo"
  }
</script>

<style scoped lang="stylus">
  .logo
    background #2b2f3a
    height 50px
    width 100%
    display flex
    align-items center
    justify-content space-around

    .logo-img
      width 32px
      height 32px
      display flex
      justify-content center
      align-items center

      img
        width 100%
        height 100%

    .title
      display flex
      justify-content center
      align-items center
      margin-right 10px
      margin-left 10px

      span
        color #fff
        font-size 14px
        font-weight 550

</style>
