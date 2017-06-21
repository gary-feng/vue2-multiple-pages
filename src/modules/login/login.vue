<template>
  <div class="warp">
    <p>Login page</p>
    <input type="button" value="Login" @click="login"/>
    <p>{{user}}</p>
  </div>
</template>

<script>
  import loginService from './services/loginService'

  export default {
    data () {
      return {
        user: {}
      }
    },
    methods: {
      login () {
//        var self = this
        loginService.testGet()
        .then((res) => {
          this.user = res.data.results
        })
      }
    }
  }
</script>

<style src="assets/less/style.less"></style>
<style lang="less" scoped>
  .warp {
    max-width: 750px;
    margin: 0 auto;
    text-align: center;
  }
</style>
