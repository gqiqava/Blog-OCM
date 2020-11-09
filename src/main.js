import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import i18n from './i18n'
import App from './App.vue'
import store from './store'
import router from './router'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  VuePhoneNumberInput,
  i18n,
  render: h => h(App)
}).$mount('#app')
