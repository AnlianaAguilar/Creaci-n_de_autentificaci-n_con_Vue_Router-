import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {app} from '@/firebase/firebase.js'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

Vue.config.productionTip = false
console.log(app);

const auth = getAuth()

onAuthStateChanged(auth,()=>{

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
  
})



