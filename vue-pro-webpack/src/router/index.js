import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
// 引入各组件
import home from '@/components/home/home.vue'
import search from '@/components/search/search.vue'
import nearby from '@/components/nearby/nearby.vue'
import mine from '@/components/mine/mine.vue'
import nearbylesson from '@/components/nearby/nearbylesson.vue'
import detail from '@/components/detail/detail.vue'
import program from '@/components/detail/program.vue'
import evaluate from '@/components/detail/evaluate.vue'
import organization from '@/components/detail/organization.vue'
import apply from '@/components/apply/apply.vue'
import pay from '@/components/apply/pay.vue'
import result from '@/components/apply/result.vue'
import studytool from '@/components/studytool/studytool.vue'
import location from '@/components/location/location.vue'
import pingjia from '@/components/mine/pingjia.vue'
import all from '@/components/indent/all/all.vue'
import collect from '@/components/mine/collect.vue'
// mint-ui
import MintUi from 'mint-ui'
import '../../node_modules/mint-ui/lib/style.css'
// 公共样式
import '../assets/css/base.css'
// 字体样式
import '../assets/font/iconfont.css'
// jQuery
import $ from 'jquery'
// 使用
Vue.use(Router)
Vue.use(Resource)
Vue.use(MintUi)
// 路由规则
export default new Router( {
// linkActiveClass: 'mui-active',
routes:[ 
        {path:'/', component:home}, 
        {path:'/home', component:home}, 
        {path:'/home/:cityname',component:home },
        {path:'/mine', component:mine },
        {path:'/search',component:search},
        {path:'/nearby',component:nearby},
        {path:'/nearby/nearbylesson',component:nearbylesson},
        {path:'/program',component:program},
        {path:'/detail',component:detail},
        {path:'/detail/apply',component:apply},
        {path:'/detail/pay',component:pay},
        {path:'/detail/result',component:result},
        {path:'/evaluate',component:evaluate},
        {path:'/organization',component:organization},
        {path:'/studytool',component:studytool},
        {path:'/location',component:location},    
        {path:'/mine/pingjia',component:pingjia},    
        {path:'/indent/all',component:all},
        {path:'/mine/collect',component:collect},
    ]
})
