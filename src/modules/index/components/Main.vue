<template>
  <div class="main">
    <p>{{title}}</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'main',
    data () {
      return {
        title: 'Main page'
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    color: green;
    text-align: center;
  }
</style>
