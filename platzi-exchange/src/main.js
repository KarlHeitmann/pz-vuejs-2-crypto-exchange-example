import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css' //@ es algo que entrega webpack y vue para hacer referencia de manera relativa al directorio source :D
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))
Vue.filter('percent', percentFilter)
Vue.filter('dollar', dollarFilter)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
