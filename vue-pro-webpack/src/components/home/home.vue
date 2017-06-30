<template>
    <div class="homepage">
        <!--轮播-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <a class="banner-link" href="#">
                    <img src="../../assets/img/banner.jpg" alt="" class="banner-pic">
                </a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a class="banner-link" href="#">
                    <img src="../../assets/img/banner.jpg" alt="" class="banner-pic">
                </a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a class="banner-link" href="#">
                    <img src="../../assets/img/banner.jpg" alt="" class="banner-pic">
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <!--城市定位-->
        <router-link to="/location" class="loc">   
                <i class="pic"></i> <span v-text='$route.params.cityname?$route.params.cityname:cityname' ref="city" class="a"></span>
        </router-link>
        <!--导航-->
        <div class="nav">
            <ul class="nav-wrap">
                <li>
                    <router-link to="#" class="nav-link">
                        <span class="pic fudao"></span>
                        <div class="nav-title">学习辅导</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="nav-link">
                        <span class="pic caiyi"></span>
                        <div class="nav-title">才艺兴趣</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="nav-link">
                        <span class="pic haoke"></span>
                        <div class="nav-title">畅销好课</div>
                    </router-link>
                </li>
                <li class="last-li">
                    <router-link to="/studytool" class="nav-link">
                        <span class="pic tool"></span>
                        <div class="nav-title">学习工具</div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--广告-->
        <div class="adv">
            <ul>
                <li>
                    <router-link to="/detail" class="adv-link">
                        <img src="../../assets/img/Carousel_1.jpg" alt="" class="adv-pic">
                    </router-link>
                </li>
                <li>
                    <router-link to="/detail" class="adv-link">
                        <img src="../../assets/img/Carousel_1.jpg" alt="" class="adv-pic">
                    </router-link>
                </li>
                <li>
                    <router-link to="/detail" class="adv-link">
                        <img src="../../assets/img/Carousel_1.jpg" alt="" class="adv-pic">
                    </router-link>
                </li>
                <li>
                    <router-link to="/detail" class="adv-link">
                        <img src="../../assets/img/Carousel_1.jpg" alt="" class="adv-pic">
                    </router-link>
                </li>
                <li>
                    <router-link to="/detail" class="adv-link">
                        <img src="../../assets/img/Carousel_1.jpg" alt="" class="adv-pic">
                    </router-link>
                </li>
            </ul>
        </div>
        <!--推荐-->
        <div class="title" @click="setStorage">
            <i class="title-pic tit-tuijian"></i>
            <span class="text">为您推荐</span>
        </div>
        <div class="recommended-wrap">
            <router-link to="/detail" class="recommended">
                <img class="content-pic" src="../../assets/img/list_1.jpg">
                <div class="content-msg">
                    <h3>高三语文专项（适用高中年级）</h3>
                    <p>系统化理清叙文阅读的点、线、面...</p>
                    <div class="num">
                        <i></i><span>775人已参加</span>
                        <a href="#" class="signUp">报名</a>
                    </div>
                </div>
            </router-link>
            <router-link to="/detail" class="recommended">
                <img class="content-pic" src="../../assets/img/list_2.jpg">
                <div class="content-msg">
                    <h3>高三语文专项（适用高中年级）</h3>
                    <p>系统化理清叙文阅读的点、线、面...</p>
                    <div class="num">
                        <i></i><span>775人已参加</span>
                        <a href="#" class="signUp">报名</a>
                    </div>
                </div>
            </router-link>
            <router-link to="/detail" class="recommended">
                <img class="content-pic" src="../../assets/img/list_3.jpg">
                <div class="content-msg">
                    <h3>高三语文专项（适用高中年级）</h3>
                    <p>系统化理清叙文阅读的点、线、面...</p>
                    <div class="num">
                        <i></i><span>775人已参加</span>
                        <a href="#" class="signUp">报名</a>
                    </div>
                </div>
            </router-link>
            <router-link to="/detail" class="recommended">
                <img class="content-pic" src="../../assets/img/list_4.jpg">
                <div class="content-msg">
                    <h3>高三语文专项（适用高中年级）</h3>
                    <p>系统化理清叙文阅读的点、线、面...</p>
                    <div class="num">
                        <i></i><span>775人已参加</span>
                        <a href="#" class="signUp">报名</a>
                    </div>
                </div>
            </router-link>
        </div>
        <!--学习工具-->
        <div class="title">
            <i class="title-pic tit-tool"></i>
            <span class="text">学习工具</span>
            <a href="#">更多<i></i></a>
        </div>
        <div class="studytool-wrap">
            <ul class="content-wrap">
                <li class="content">
                    <img class="pic" src="../../assets/img/logo_1.png">
                    <p class="text">学习中心</p>
                    <p class="text1">生活技能应用</p>
                    <router-link to="/studytool" class="user">立即使用</router-link>
                </li>
                <li class="content">
                    <img class="pic" src="../../assets/img/logo_2.png">
                    <p class="text">学习中心</p>
                    <p class="text1">生活技能应用</p>
                    <router-link to="/studytool" class="user">立即使用</router-link>
                </li>
                <li class="content">
                    <img class="pic" src="../../assets/img/logo_3.png">
                    <p class="text">学习中心</p>
                    <p class="text1">生活技能应用</p>
                    <router-link to="/studytool" class="user">立即使用</router-link>
                </li>
                <li class="content">
                    <img class="pic" src="../../assets/img/logo_2.png">
                    <p class="text">学习中心</p>
                    <p class="text1">生活技能应用</p>
                    <router-link to="/studytool" class="user">立即使用</router-link>
                </li>
                <li class="content">
                    <img class="pic" src="../../assets/img/logo_1.png">
                    <p class="text">学习中心</p>
                    <p class="text1">生活技能应用</p>
                    <router-link to="/studytool" class="user">立即使用</router-link>
                </li>
            </ul>
        </div>
        <!--畅销好课-->
        <div class="title title-haoke">
            <i class="title-pic tit-haoke"></i>
            <span class="text">畅销好课</span>
        </div>
        <!--mint-ui加载更多-->
        <mt-loadmore :bottom-method="loadBottom"  ref="loadmore" >
            <ul class="lesson-wrap" ref="lessonlist">
                <li>
                    <router-link to="/detail" class="lesson-box" v-for="(item,index) in list" :key="index">
                        <img class="pic" :src=item.src>
                        <div class="msg">产品经理必备技能速成班</div>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
        <!--底部通栏-->
        <foot></foot>
    </div>
</template>
<script>
import foot from '../common/foot.vue'
    export default {
        components:{
            foot
        },
        data() {
            return {
                list: [
                        {src:'../../static/img/pic_1.png'},
                        {src:'../../static/img/pic_2.png'},
                        {src:'../../static/img/pic_3.png'},
                        {src:'../../static/img/pic_4.png'},
                ],
                cityname:'长沙'
            }
        },
        created() {
            document.title="智慧校园";
        },
        mounted(){          
            this.getStorage()
            this.setStorage()
        },
        methods: {
            loadBottom() {
                // 加载更多数据
                this.list = this.list.concat([
                    {src:'../../static/img/pic_1.png'},
                    {src:'../../static/img/pic_2.png'},
                    {src:'../../static/img/pic_3.png'},
                    {src:'../../static/img/pic_4.png'}
                ])
                this.$refs.lessonlist.style.marginTop='50px';
            },
            setStorage(){
                    if(this.$route.params.cityname)
                    {
                        console.log(33)
                        localStorage.setItem('key',this.$route.params.cityname)
                    }
            },
            getStorage(){
                var a =localStorage.getItem('key')
                // console.log(a)
                if(a){
                    this.cityname=a;
                }else{
                    this.cityname='长沙'
                }
                
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import './home.styl'
</style>