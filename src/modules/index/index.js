import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
// import Resource from 'vue-resource'

// Vue.use(Resource)

new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index }
})
