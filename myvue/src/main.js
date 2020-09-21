// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#test',
  data: {
    message: 'hello.',
    num: 1
  },
  methods: {
    tt: function () {
      alert('This is a test.')
    },
    add: function () {
      if (this.num < 10) {
        this.num += 1
      } else {
        alert('数值不能大于10！')
      }
    },
    sub: function () {
      if (this.num > 0) {
        this.num -= 1
      } else {
        alert('数值不能小于0！')
      }
    }
  }
})
