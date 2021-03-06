import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/hello': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
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
