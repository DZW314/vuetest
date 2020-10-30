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
    num: 1,
    imgArr: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600751671382&di=da65d7b86793671178de579493ac559f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F29%2F20160929001358_X2xZL.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600751671381&di=dfe1b67b2b5ce323c1750addb630b7c8&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201709%2F15%2F20170915161626_Wrk8h.thumb.400_0.gif',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600751671379&di=5a993bbd51ba538daae3cc62d7689d66&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F38dbb6fd5266d0163cbb0965912bd40734fa35d8.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600751671376&di=32f431cb8379b70139c61dfe88a372e1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd90da2bf155ac2a88f234b7e23da1ac9e546e24316b18-DlJ2dE_fw658'
    ],
    index: 1,
    arr: [
      'v-on', 'v-text', 'v-html', 'v-if', 'v-for', 'v-bind', 'v-model'
    ]
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
    },
    prev: function () {
      this.index -= 1
    },
    next: function () {
      this.index += 1
    }
  }
})
