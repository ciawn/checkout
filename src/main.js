// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from './components/Footer'
import ListItems from './components/ListItems'
import ButtonsGoBack from './components/ButtonsGoBack'
import Identify from './components/Identify'
import Payment from './components/Payment'
import Header from './components/Header'

Vue.config.productionTip = false

Vue.component('footer-component', Footer)
Vue.component('list-items', ListItems)
Vue.component('buttons-go-back', ButtonsGoBack)
Vue.component('identify', Identify)
Vue.component('payment', Payment)
Vue.component('header-component', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
