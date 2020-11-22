// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入VUEX
import store from './store'
// ===================================================================================================
//配置vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// ====================================================================================================
//配置axios
// import axios from "axios";
// import axios from "@/utils/request";
// Vue.prototype.$axios = axios;
// ===========================================================================================================

// 配置element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
// ================================================================================================================
// 全局路由守卫
router.beforeEach((to, from, next) => {
  /*to:即将要进入的路由对象。
  from:即将要离开的路由对象。
  next:是否进入到路由，next(url):跳转到指定的路由 */
  console.log("我是门口老大爷")
  
  // 设置面包屑
  // if(to.hasOwnProperty('meta')){//如果路由中配置了面包屑就调用
  //   console.log(to)
  //   store.commit('setBread',to.meta)
  // }

   // 设置面包屑   判断是否是管理后台页面
  //  if(to.path.indexOf("/day09")>-1){//如果路由中配置了面包屑就调用
  //   // 判断当前路由是否配置meta属性，如果配置了就设置面包屑
  //   if(to.meta.hasOwnProperty('name')){
  //     // 把数据提取到vuex中
  //     store.commit('setBread',{
  //       name:to.meta.name,
  //       path:to.path
  //     })
  //   }
  // }
  
// 跨域接口电商后台
// 判断是否是电商管理后台页面
// if (to.path.indexOf('/day14') > -1) {
//   console.log('我是管理后台页面')
//   // 先获取本地存储的token值
//   let token = sessionStorage.getItem("bd_token")
//   console.log(token)
//   // 判断是否是登录页面
//   if (to.path != "/day14/login") {
//     // 如果不是登陆页面直接跳转到管理页面
//     token == null ? next('/day14/login') : "";
//   } 
// }





  // 判断是否是电商管理后台页面
  // if (to.path.indexOf('/login') > -1) {
  //   console.log('我是管理后台页面')

  //   // 先获取本地存储的token值
  //   let token = sessionStorage.getItem("user_token")
  //   // 判断是否是登录页面
  //   if (to.path == "/login/login") {
  //     // 如果用户登陆了直接跳转到管理页面
  //     token != null ? next('/login/home') : "";
  //   } else {
  //     // 如果用户没有登录就返回登录页面
  //     token == null ? next('/login/login') : "";
  //   }

  // }

<<<<<<< HEAD
  next()
})
// =======================================================================================
/* eslint-disable no-new */
=======
//配置vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

>>>>>>> 3c9f208381d997bc387238f7be8eba247fe606c7
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount("#app")
