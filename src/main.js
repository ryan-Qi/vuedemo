import Vue from "vue";
import App from "./App.vue";
import router from './routers'
/*import 'bootstrap'*/
/*import $ from 'jquery'*/


new Vue({//配置对象的属性名都是一些确定的属性名，不能随便修改
    render:h=>h(App),
    router,
}).$mount('#app')