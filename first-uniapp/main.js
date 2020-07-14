import Vue from 'vue'
import App from './App'
import MySwiper from './components/myswiper/myswiper.vue'
import iGlobal from './common/lib/global.js'

Vue.config.productionTip = false

Vue.prototype.iGlobal = iGlobal

Vue.component('myswiper',MySwiper)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
