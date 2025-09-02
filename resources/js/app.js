import Vue from 'vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import i18n from './plugins/i18n'
import App from './components/App'
import '~/../sass/app.scss'

import './plugins'
import './components'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../css/tailwind.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  vuetify,
  render: h => h(App),
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const scrollThreshold = 10; // Replace '200' with the scroll threshold where you want to add/remove the class
      const shouldAddClass = window.scrollY > scrollThreshold;
      document.body.classList.toggle('scroll-active', shouldAddClass);
    },
  },
});
// app.js



