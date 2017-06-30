<template>
    <div class="nearby">
        <mt-header title="附近" class="nearby-title">
				<router-link to="/" slot="left">
					<i><</i> 返回
				</router-link>
				<mt-button icon="more" slot="right">
				</mt-button>
		</mt-header>
        <ul class="nearby-nav">
            <li><router-link to="/nearby"><span>附近机构</span></router-link></li>
            <li><router-link to="/nearby/nearbylesson"><span>附近课程</span></router-link></li>
        </ul>
        <div class="map" >           
        </div>
        <ul class="nearby-list" @touchstart="move" @touchend="moveend">
            <span class="line"></span>
            <li>
                <a href="#">
                    <i class="headpic"></i>
                    <div class="msg">
                        <div class="nearby-list-title">
                            <i class="icon"></i> 
                            <span>创知路教育机构</span>
                        </div>
                        <div class="star">
                            <star :score="5"></star>
                            <span class="text">5.0<b>|</b>120门课程<b>|</b>45米</span>
                        </div>
                        <div class="tag">
                            <i class="tag1">课程多</i>
                            <i class="tag2">知名</i>
                            <i class="tag3">美女老师</i>
                        </div>
                    </div>
                </a>
            </li>
             <li>
                <a href="#">
                    <i class="headpic"></i>
                    <div class="msg">
                        <div class="nearby-list-title">
                            <i class="icon"></i> 
                            <span>创知路教育机构</span>
                        </div>
                        <div class="star">
                            <star :score="4"></star>
                            <span class="text">4.0<b>|</b>120门课程<b>|</b>45米</span>
                        </div>
                        <div class="tag">
                            <i class="tag1">课程多</i>
                            <i class="tag2">知名</i>
                            <i class="tag3">美女老师</i>
                        </div>
                    </div>
                </a>
            </li>
             <li>
                <a href="#">
                    <i class="headpic"></i>
                    <div class="msg">
                        <div class="nearby-list-title">
                            <i class="icon"></i> 
                            <span>创知路教育机构</span>
                        </div>
                        <div class="star">
                            <star :score="3"></star>
                            <span class="text">3.0<b>|</b>120门课程<b>|</b>45米</span>
                        </div>
                        <div class="tag">
                            <i class="tag1">课程多</i>
                            <i class="tag2">知名</i>
                            <i class="tag3">美女老师</i>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="headpic"></i>
                    <div class="msg">
                        <div class="nearby-list-title">
                            <i class="icon"></i> 
                            <span>创知路教育机构</span>
                        </div>
                        <div class="star">
                            <star :score="4"></star>
                            <span class="text">4.0<b>|</b>120门课程<b>|</b>45米</span>
                        </div>
                        <div class="tag">
                            <i class="tag1">课程多</i>
                            <i class="tag2">知名</i>
                            <i class="tag3">美女老师</i>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="headpic"></i>
                    <div class="msg">
                        <div class="nearby-list-title">
                            <i class="icon"></i> 
                            <span>创知路教育机构</span>
                        </div>
                        <div class="star">
                            <star :score="4"></star>
                            <span class="text">4.0<b>|</b>120门课程<b>|</b>45米</span>
                        </div>
                        <div class="tag">
                            <i class="tag1">课程多</i>
                            <i class="tag2">知名</i>
                            <i class="tag3">美女老师</i>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <foot></foot>
    </div>
</template>
<script>
import foot from '../common/foot.vue'
import star from '../common/star'
    export default{
        components:{
            foot,
            star
        },
        data(){
            return{

            }
        },
        created () {
        },
        methods: {
            move:function(){
                // let a = document.body.querySelector('.nearby-list');
                // console.log(a);
                // a.style.backgroundColor='red';
            },
            moveend:function(){

            }
        }
    }
</script>
<style lang="stylus" scoped>
 @import './nearby.styl'
</style>