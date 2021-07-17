import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import APlayer from '@moefe/vue-aplayer'
import router from "./router/index"
import store from './store/index'

Vue.use(Vant)
Vue.use(APlayer, {
    defaultCover: 'https://github.com/u3u.png',
    productionTip: true,
});

// 全局过滤器
Vue.filter('datefmt',function (input) {//当input为时间戳，需转为Number类型
    if(input){
        return input.substring(0,9)
    }else{
        return "";
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
