<template>
    <div class="collect">
        <!-- 利用mint-ui中的header组件实现整个系统的头部 -->
        <mt-header title="我的收藏">
            <router-link to="/" slot="left">
                <i>
                    <</i> 返回
            </router-link>
            <mt-button icon="more" slot="right">
            </mt-button>
        </mt-header>
        <div class="top-ban">
        </div>
        <!-- 利用mui中的tabbar组件实现系统的tab切换 -->
        <nav class="mui-bar mui-bar-tab">
            <div class="mui-tab-item" @click='check1' :class="{'active':active}" to="/mine/collect">
                <span class="mui-tab-label">课程</span>
            </div>
            <div class="mui-tab-item" @click='check2' :class="{'active':!active}" to="#">
                <span class="mui-tab-label">机构</span>
            </div>
        </nav>
        <div class="lesson1" ref="lesson">
            <div class="item" ref="item1">
                <i></i>
                <div>
                    <h4>全国语文冲刺提分卷【创知路】</h4>
                    <star :score='4'></star>
                    <span class="scoe">4.0 | 1.96人参加</span>
                </div>
                <span ref='cancel1'>
                    <s></s>
                    <span>取消收藏</span>
                </span>
            </div>
            <div class="item" ref="item2">
                <i></i>
                <div>
                    <h4>高三语文专项</h4>
                    <star :score='4'></star>
                    <span class="scoe">4.0 | 1.96人参加</span>
                </div>
                <span ref='cancel2'>
                    <s></s>
                    <span>取消收藏</span>
                </span>
            </div>
            <div class="item" ref="item3">
                <i></i>
                <div>
                    <h4>2017高考数学学渣逆袭班零...</h4>
                    <star :score='4'></star>
                    <span class="scoe">4.0 | 1.96人参加</span>
                </div>
                <span ref='cancel3'>
                    <s></s>
                    <span>取消收藏</span>
                </span>
            </div>
        </div>
        <div class="program" ref="program">
            <div class="item">
                <i></i>
                <div>
                    <div class="clearfix">
                        <h4>创知路教育机构</h4>
                        <s></s>
                    </div>
                    <star :score='5'></star>
                    <span class="scoe">5.0 | 80门课程</span>
                </div>
            </div>
            <div class="item">
                <i></i>
                <div>
                    <div class="clearfix">
                        <h4>创知路教育机构</h4>
                        <s></s>
                    </div>
                    <star :score='5'></star>
                    <span class="scoe">5.0 | 80门课程</span>
                </div>
            </div>
            <div class="item">
                <i></i>
                <div>
                    <div class="clearfix">
                        <h4>创知路教育机构</h4>
                        <s></s>
                    </div>
                    <star :score='5'></star>
                    <span class="scoe">5.0 | 80门课程</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import star from '../common/star';
function del(item, cancel) {
    var start, distance;
    item.addEventListener('touchstart', function (e) {
        start = e.touches[0].clientX;
    });
    item.addEventListener('touchmove', function (e) {
        distance = e.touches[0].clientX - start;
    });
    item.addEventListener('touchend', function () {
        if (distance < -10) {
            item.className = 'item transform'
        } else {
            item.className = 'item'
        }
    });
    cancel.onclick = function () {
        item.style.display = 'none';
    }
}
export default {
    components: {
        star
    },
    data() {
        return {
            active: true,
        }
    },
    mounted() {
        del(this.$refs.item1, this.$refs.cancel1);
        del(this.$refs.item2, this.$refs.cancel2);
        del(this.$refs.item3, this.$refs.cancel3);
    },
    methods: {
        check1() {
            this.active = true;
            this.$refs.lesson.style.display = 'block';
            this.$refs.program.style.display = 'none';
        },
        check2() {
            this.active = false;
            this.$refs.lesson.style.display = 'none';
            this.$refs.program.style.display = 'block'
        },
    }
}
</script>
<style lang='stylus' scoped>
@import './collect.styl'
</style>