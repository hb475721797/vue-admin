<template>
  <div>
    <my-header></my-header>
    <my-main/>
  </div>
</template>

<script>
  import myHeader from "../../components/myHeader";
  import myMain from "../../components/myMain";

  export default {
    name: "Right",
    components: {
      myHeader,
      myMain
    }
  }
</script>

<style scoped lang="stylus">

</style>
