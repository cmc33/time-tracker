import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/hello': {
    component: Home
  }
})

router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
