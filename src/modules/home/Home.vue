<template>
  <div class="warp">
    <hd></hd>
    <h3>Home page</h3>
    <ft></ft>
  </div>
</template>

<script>
  import Header from '../../common/components/Header'
  import Footer from '../../common/components/Footer'

  export default {
    name: 'home',
    components: {
      hd: Header,
      ft: Footer
    }
  }
</script>

<style src="assets/less/style.less"></style>
<style lang="less" scoped>
  .warp {
    max-width: 750px;
    margin: 0 auto;
    /*background: #CCC;*/
  }
</style>
