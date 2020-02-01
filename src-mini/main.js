import Vue from "vue";
import App from "./App.vue";
import { Button } from 'mint-ui'

//注册成标签(全局注册)
Vue.component(Button.name,Button)


new Vue({
    render:h=>h(App)
}).$mount('#app')