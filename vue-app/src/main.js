import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// Vue.use(Router)
// const myRouter=new Router({
//   routes:[
//     {
//       path: '/',
//       name:'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name:'about',
//       component: About
//     }
//   ],
//   mode:'history'
// })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
