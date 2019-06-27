// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import echarts from 'echarts'
import VCharts from 'v-charts'
import 'V-charts/lib/style.css'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iview)
Vue.use(VCharts)
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
const router =new VueRouter({
	routes:Routes,
	mode:'hash',
	base:'/dist/',
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
	router:router,
})
