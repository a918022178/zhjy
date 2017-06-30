<template>
    <div class="mine">
        <div class="pic-box">
            <i class="head-logo"></i>
            <i class="set"></i>
        </div>
        <div class="msg">
            <span>高三语文</span> / <span>数学</span><i class="msg-icon"></i>
        </div>
        <div class="nav-box">
            <ul class="mine-nav">
                <li>
                    <a href="#">
                        <i class="icon-left fl discount"></i> <span >我的课券</span> <i class="icon-right fr"></i>
                    </a>
                </li>
                <li>
                    <router-link to="/indent/all">
                        <i class="icon-left fl order"></i> <span >我的订单</span> <i class="icon-right fr"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/mine/collect">
                        <i class="icon-left fl hide"></i> <span >我的收藏</span> <i class="icon-right fr"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/mine/pingjia">
                        <i class="icon-left fl rate"></i> <span >我的评价</span> <i class="icon-right fr"></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--底部通栏-->
        <foot></foot>
    </div>
</template>
<script>
import foot from '../common/foot.vue'
    export default{
        components:{
            foot
        }
    }
</script>
<style lang="stylus" scoped>
    @import './mine.styl'
</style>