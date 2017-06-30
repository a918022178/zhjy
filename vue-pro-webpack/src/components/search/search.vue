<template>
    <div id="search">
        <mt-header title="搜索">
            <router-link to="/" slot="left">
                <i><</i> 返回
            </router-link>
            <mt-button icon="more" slot="right">
            </mt-button>
        </mt-header>
        <div class="import">
            <i @click='search'></i>
            <input type="text" placeholder="课程 / 机构 / 学习工具" ref="input" class="w100">
            <span ref="cancel" @click='cancel'>取消</span>
        </div>
        <div class="search" ref="search">
            <div class="history">
                <h4>历史记录<s></s></h4>
                <div>
                    <span @click='yuwen'>语文</span>
                    <span>写作提高</span>
                    <span>高二</span>
                    <span>特长班</span>
                    <span>冲刺班</span>
                </div>
            </div>
            <div class="devide"></div>
            <div class="hot">
                <h4>热门搜索</h4>
                <div>
                    <span>早教</span>
                    <span>舞蹈声乐</span>
                    <span>背单词</span>
                    <span>高二</span>
                    <span>写作提高</span>
                    <span>早教</span>
                </div>
            </div>
        </div>
        <div class="result" ref="result">
            <div class="lesson">
                <h4>课程</h4>
                <div class="item">
                    <i></i>
                    <div class="right">
                        <h4>全国卷语文冲刺提分课【创知路】</h4>
                        <div>
							<star :score='4'></star><span class="sp2">4.0&nbsp;&nbsp;|&nbsp;&nbsp;1096人参加</span>
                            <div><s>线上班课</s><s>知名</s></div>
                            <p>共23课</p>
						</div>    
                    </div> 
                </div>
                 <div class="devide"></div>
                <div class="item">
                    <i></i>
                    <div class="right">
                        <h4>全国卷语文冲刺提分课【创知路】</h4>
                        <div>
							<star :score='4'></star><span class="sp2">4.0&nbsp;&nbsp;|&nbsp;&nbsp;1096人参加</span>
                            <div><s>线上班课</s><s>知名</s></div>
                            <p>共23课</p>
						</div>    
                    </div> 
                </div>
                <div class="devide"></div>
                <router-link class=" " to="#">
					查看更多课程 >
				</router-link>
            </div>
            <div class="devide"></div>
            <div class="program lesson">
                <h4>机构</h4>
                <div class="item">
                    <i></i>
                    <div class="right">
                        <div><span class="icon"></span><h4>晨露课堂</h4></div>
                        <div>
							<star :score='5'></star><span class="sp2">5.0&nbsp;&nbsp;|&nbsp;&nbsp;80 门课程</span>
                            <div class="label1"><s>课程多</s><s>知名讲师</s></div>
						</div>    
                    </div> 
                </div>
                <div class="devide"></div>
                <div class="item">
                    <i></i>
                    <div class="right">
                        <div><span class="icon"></span><h4>创知路教育机构</h4></div>
                        <div>
							<star :score='4'></star><span class="sp2">4.0&nbsp;&nbsp;|&nbsp;&nbsp;120门课程</span>
                            <div class="label2"><s>课程多</s><s>知名</s><s>美女老师</s><s>规划</s></div>
						</div>    
                    </div> 
                </div>
                <div class="devide"></div>
                <router-link class=" " to="#">
					查看更多机构 >
				</router-link>
            </div>
            <div class="devide"></div>
            <!--学习工具-->
            <div class=" tool lesson">
                <h4>学习工具</h4>
                <div class="item">
                    <i></i>
                    <div class="right">
                        <h4>学习中心</h4>
                        <div>APP应用</div>
                        <router-link class="enter" to="#">
                            进入
                        </router-link>
                        <p>1.丰富的生活技能、兴趣爱好课程，包括：家居生活、健身健康、服饰美容、使用软件...</p>
                    </div> 
                </div>
                <div class="devide"></div>
                <router-link class=" " to="#">
					查看更多学习工具 >
				</router-link>
                <div class="devide bot_devide"></div>
            </div>
        </div>
        
        <foot></foot>
    </div>
</template>
<script>
import foot from '../common/foot.vue';
import star from '../common/star.vue';
export default {
    components: {
        foot,
        star
    },
    data(){
        return{

        }
    },
    methods: {
        search() {
           console.log('dfsdfsd')
            if(this.$refs.input.value.replace(/^\s\s*/, '').replace(/\s\s*$/, '')){
                this.$refs.input.className='w47';
                this.$refs.cancel.style.display='block';
                this.$refs.search.style.display='none';
                this.$refs.result.style.display='block';
                }
        },
        cancel(){
            this.$refs.input.className='w100';
            this.$refs.cancel.style.display='none';
            this.$refs.search.style.display='block';
            this.$refs.result.style.display='none';
            this.$refs.input.value='';
        },
        yuwen(){
            this.$refs.input.value='语文';
            this.$refs.input.className='w47';
            this.$refs.cancel.style.display='block';
            this.$refs.search.style.display='none';
            this.$refs.result.style.display='block';
        }
    }
}
</script>
<style lang="stylus" scoped>
@import './search.styl'
</style>