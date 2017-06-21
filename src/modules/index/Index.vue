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
  import interceptors from './factories/interceptors'
//  import dataService from './services/dataService'

  export default {
    name: 'index',
    components: {
      hd: Header,
      ft: Footer
    },
    data () {
      return {
        test: {}
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        interceptors.init()
      }
//      getUserInfo () {
//        dataService.testGet()
//        .then((res) => {
//          this.$data.test = res.data.results
//        })
//      }
    }
  }
</script>

<style src="assets/less/style.less"></style>
<style lang="less">
  .wrap {
    max-width: 750px;
    margin: 0 auto;
    padding: 10px 20px;
    h2 {
      color: aqua;
    }
  }
</style>
