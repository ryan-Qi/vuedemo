import Vue from "vue";
import VueResource from 'vue-resource'
import App from "./App.vue";

Vue.use(VueResource) //内部会给vm对象和组件对象添加一个属性：$http

new Vue({
    render:h=>h(App)
}).$mount('#app')