import Vue from 'vue'
// import moment from 'moment';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

// Si no necesita los estilos, no conecte 
import  'sweetalert2/dist/sweetalert2.min.css' ;
// import EventBus from './helpers/EventBus'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueSweetalert2);

//axios.defaults.baseURL = 'http://142.93.14.230:8091/api/abogados'
axios.defaults.baseURL = 'http://localhost:8090/api/abogados'


Vue.prototype.$userLogged = true

// Validación Login por Router
const rutasPermitidas = {
  Home: true,
  Consult: true,
  HomeLawyer: true,
  ActiveEmail: true
}

router.beforeEach((to, from, next) => {
  const users = localStorage.getItem('user')
  if (!users && rutasPermitidas[to.name] || users) {
    next()
  } else {
    next('/')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
