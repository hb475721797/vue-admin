<template>
  <div id="avrilko">
    <div class="app-left">
      <left/>
    </div>
    <div class="app-right">
      <Right/>
    </div>

  </div>
</template>

<script>
  import Left from "./views/layout/Left";
  import Right from "./views/layout/Right";

  export default {
    name: 'app',
    components: {
      Left,
      Right
    }
  }
</script>

<style lang="stylus">
  html
    width 100%
    height 100%
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif

    body
      width 100%
      height 100%

      #avrilko
        width 100%
        height 100%

      .app-left
        width 210px
        transition width .3s
        height 100%
        float left

      .app-right
        width 100%

</style>
