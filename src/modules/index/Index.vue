<template>
  <div>
    <hd></hd>
    <div class="wrap">
      <router-view></router-view>
    </div>
    <ft></ft>
  </div>
</template>

<script>
  import Header from '../../common/components/Header'
  import Footer from '../../common/components/Footer'
  export default {
    name: 'index',
    components: {
      hd: Header,
      ft: Footer
    }
  }
</script>

<style src="assets/less/style.less"></style>
<style lang="less">
  .wrap {
    max-width: 750px;
    margin: 0 auto;
    /*background: #CCC;*/
    padding: 10px 20px;
    h2 {
      color: aqua;
    }
  }
</style>
