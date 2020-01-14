<template>
  <div>
    <logo/>
    <sidebar/>
  </div>
</template>

<script>
  import logo from "../../components/logo";
  import sidebar from "../../components/sidebar";

  export default {
    name: "Left",
    components: {
      logo,
      sidebar
    }
  }
</script>

<style scoped lang="stylus">
  div
    height 100%
</style>
