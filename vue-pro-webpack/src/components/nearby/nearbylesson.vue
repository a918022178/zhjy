<template>
    <div class='nearbylesson'>
        <mt-header title="附近">
				<router-link to="/" slot="left">
					<i><</i> 返回
				</router-link>
				<mt-button icon="more" slot="right">
				</mt-button>
		</mt-header>
        <ul class="nearby-nav">
            <li><router-link to="/nearby"><span class="sp1">附近机构</span></router-link></li>
            <li><router-link to="/nearby/nearbylesson"><span>附近课程</span></router-link></li>
        </ul>
        <div class="listbox">
            <ul class="lessonlist">
                <li>
                    <a href="#">
                        <img class="headpic" src="../../assets/img/list_1.jpg">
                        <div class="msg">
                            <div class="nearby-list-title">
                                全国券语文冲刺提分课【创知路】
                            </div>
                            <div class="star clearfix">
                                <star :score="5"></star>
                                <span class="text">5.0<b>|</b>1096参加</span>
                            </div>
                            <div class="tag">
                                <i class="tag1">课程多</i>
                                <i class="tag2">学习规划</i>
                                <i class="tag3">个性</i>
                            </div>
                            <div class="distance">
                                距离您120米
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="headpic" src="../../assets/img/list_2.jpg">
                        <div class="msg">
                            <div class="nearby-list-title">
                                2017高考数学学渣逆袭班零基础高分
                            </div>
                            <div class="star clearfix">
                                <star :score="3"></star>
                                <span class="text">3.0<b>|</b>520参加</span>
                            </div>
                            <div class="tag">
                                <i class="tag1">课程多</i>
                                <i class="tag2">学习规划</i>
                                <i class="tag3">个性</i>
                            </div>
                            <div class="distance">
                                距离您890米
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="headpic" src="../../assets/img/list_3.jpg">
                        <div class="msg">
                            <div class="nearby-list-title">
                                高三数学满分必做300题
                            </div>
                            <div class="star clearfix">
                                <star :score="4"></star>
                                <span class="text">4.0<b>|</b>198参加</span>
                            </div>
                            <div class="tag">
                                <i class="tag1">课程多</i>
                                <i class="tag2">学习规划</i>
                                <i class="tag3">个性</i>
                            </div>
                            <div class="distance">
                                距离您1.3公里
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import foot from '../common/foot'
import star from '../common/star'
export default {
    components: {
        foot,
        star
    },
    created () {
    }

}
</script>

<style lang="stylus" scoped>
    @import './nearbylesson.styl'
</style>