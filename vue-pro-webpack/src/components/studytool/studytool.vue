<template>
    <div class='tool'>
            
        	<mt-header title="学习工具">
				<router-link to="/" slot="left">
					<i><</i> 返回
				</router-link>
				<mt-button icon="more" slot="right">
				</mt-button>
			</mt-header>
            <nav class="mui-bar mui-bar-tab">
				<div class="tab clearfix">
                    <div class=" clearfix">
                        <router-link class="mui-tab-item " to="/studytool">
                            <span class="mui-tab-label">学习</span>
                        </router-link>
                        <router-link class="mui-tab-item" to="/a">
                            <span class="mui-tab-label">英语</span>
                        </router-link>
                        <router-link class="mui-tab-item" to="/a">
                            <span class="mui-tab-label">考试</span>
                        </router-link>
                        <router-link class="mui-tab-item" to="/a">
                            <span class="mui-tab-label">背单词</span>
                        </router-link>
                        <router-link class="mui-tab-item" to="/a">
                            <span class="mui-tab-label">翻译</span>
                        </router-link>
                    </div>
                </div>
                <div @click='search' class="search" >
                    <i></i>
                </div>
			</nav>
            <div class="main">
                <div class="item">
                    <i></i>
                    <div class="right">
                        <div class="clearfix">
                                <div class="fl">
                                    <h4>学习中心</h4>
                                    <h5>APP 应用</h5>
                                </div>
                                <div class="fr">
                                    进入
                                    <!--<router-link  to="#">
                                        <span class="mui-tab-label">进入</span>
                                    </router-link>-->
                                </div>
                        </div>
                        <div class="summary" :class="{'packup':packup1}" data-content="1.丰富的生活技能、兴趣爱好，包括：家居生活、健身健康、服饰美容、实用软件啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊">
                            <p class="content">1.丰富的生活技能、兴趣爱好，包括：家居生活、健身健康、服饰美容、实用软件啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                            <span @click=click1>{{packup1?'展开':'收起'}}<s :class="{'change':packup1}"></s></span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <i></i>
                    <div class="right">
                        <div class="clearfix">
                                <div class="fl">
                                    <h4>跟谁学</h4>
                                    <h5>APP 应用</h5>
                                </div>
                                <div class="fr">
                                    进入
                                    <!--<router-link  to="#">
                                        <span class="mui-tab-label">进入</span>
                                    </router-link>-->
                                </div>
                        </div>
                        <div class="summary" :class="{'packup':packup2}" data-content="CCTV 隆重推荐，最靠谱的找老师APP！汇聚50 万老师和7500万学生，致力让啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊">
                            <p class="content">CCTV 隆重推荐，最靠谱的找老师APP！汇聚50 万老师和7500万学生，致力让啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                            <span @click=click2 >{{packup2?'展开':'收起'}}<s :class="{'change':packup2}"></s></span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <i></i>
                    <div class="right">
                        <div class="clearfix">
                                <div class="fl">
                                    <h4>沪江网校</h4>
                                    <h5>微信小程序</h5>
                                </div>
                                <div class="fr">
                                    进入
                                    <!--<router-link  to="#">
                                        <span class="mui-tab-label">进入</span>
                                    </router-link>-->
                                </div>
                        </div>
                        <div class="summary" :class="{'packup':packup3}" data-content="沪江网校是中国教育盛典“最受社会认可网络教育机构”。现在下载注册即立即获赠人气组合课程。无论你是学生、白领还是家里蹲，无论你想学外语、职业技能、中小学还是兴趣课，300多门经典课程任意挑，爱学习，就在一起吧！">
                            <p class="content">沪江网校是中国教育盛典“最受社会认可网络教育机构”。现在下载注册即立即获赠人气组合课程。无论你是学生、白领还是家里蹲，无论你想学外语、职业技能、中小学还是兴趣课，300多门经典课程任意挑，爱学习，就在一起吧！<br>沪江网校3.0，为了更好而改变，全新升级，重磅上线！</p>
                            <span @click=click3 :class="{'shou':!packup3}">{{packup3?'展开':'收起'}}<s :class="{'change':packup3}"></s></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="seek_box" ref="seek_box">
                  <div class="seek" ref="seek">
                    <div class="genre">
                        <h4>类型</h4>
                        <span class="unactive" @click='check' ref="genre1">全部</span>
                        <span class="unactive" @click='check' ref="genre1">APP应用</span>
                        <span class="unactive" @click='check' ref="genre1">微信小程序</span>
                    </div>
                    <div class="sort">
                        <h4>排序</h4>
                        <span class="unactive" @click='check' ref="sort1">按热度</span>
                        <span class="unactive" @click='check' ref="sort2">按最新</span>
                    </div>
                    <div class="btn">
                        <span class="unactive reset" @click='reset' ref="btn1">重置</span>
                        <span class="active" @click='search' ref="btn1">确定</span>
                    </div>
                </div>
            </div>
             <!--<ul class="comment">
                <li>☆</li>
                <li>☆</li>
                <li>☆</li>
                <li>☆</li>
                <li>☆</li>
            </ul>-->
    </div>
</template>

<script>


    function clear(param) { 
        for (var i = 0; i < param.length; i++){
            param[i].className='unactive'
         }
     }
    function span(param) { 
        for (var i = 0; i < param.length; i++) {
            param[i].onclick=function () {
                for (var i = 0; i < param.length; i++){
                    param[i].className='unactive'
                }
                this.className='active'
              }           
        }
     }

export default {
    name: 'name',
    data(){
        return{
            packup1:true,
            packup2:true,
            packup3:true,
        }
    },
    mounted () {
        // a() 
            var genre =document.querySelectorAll('.genre')[0];
            var sort =document.querySelectorAll('.sort')[0];
            var span1 = genre.querySelectorAll('span');
            var span2 = sort.querySelectorAll('span');
            var reset = document.querySelectorAll('.reset')[0];
            span(span1);
            span(span2);
            reset.onclick=function () {  
                clear(span1)
                clear(span2)
    }   
    },
    	created(){
			document.title="学习工具";
		},
        methods:{
            click1(){
                this.packup1=!this.packup1;
            },
            click2(){
                this.packup2=!this.packup2;
            },
            click3(){
                this.packup3=!this.packup3;
            },
            search(){
                // console.log(this.$refs.seek.style.transform)
                if(this.$refs.seek.style.transform==''||this.$refs.seek.style.transform=='translateY(-6rem)'){
                    this.$refs.seek_box.style.background ='rgba(0,0,0,.5)'
                    this.$refs.seek.style.transform='translateY(0)'
                    this.$refs.seek_box.style.height='100%'
                }else{
                    this.$refs.seek.style.transform='translateY(-6rem)'
                    // this.$refs.seek_box.style.display='none'
                    this.$refs.seek_box.style.height ='0'
                }
                
            },
            check(){
                    // console.log(this)
            },
            reset(){
                
            }
        }
}
</script>

<style lang="stylus" scoped>
    @import './studytool.styl'
</style>