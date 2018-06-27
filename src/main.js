// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'common/css/index.scss';
import App from './App';
import router from './router';
import store from './store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
	NProgress.start(); 
	next()
});

router.afterEach(route => {
	NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
