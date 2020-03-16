import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios';

Vue.use(axios);

import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { localize } from 'vee-validate';

import pt_BR from 'vee-validate/dist/locale/pt_BR.json';

extend('email', email);
extend('required', required);

localize({ pt_BR: { messages: pt_BR.messages }}, 'pt_BR');
localize('pt_BR');

import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

Vue.use(VueLayers)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
