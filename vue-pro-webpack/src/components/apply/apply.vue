<template>
    	<div class="apply">
            <!-- 利用mint-ui中的header组件实现整个系统的头部 -->
			<mt-header title="课程报名">
				<router-link to="/" slot="left">
					<i><</i> 返回
				</router-link>
				<mt-button icon="more" slot="right">
				</mt-button>
			</mt-header>
            <div class="main">
               <div class="indent">
						<div class="top">
							<i></i>
							<div class="right1">
									<span></span>
									<h4>高三语文专项（适用高中年级）</h4>
									<p>创知路教育机构</p>
							</div>
						</div>
						<div class="flex">
								<span class="sp1">费用</span>
								<span class="sp2">￥0.00</span>
						</div>
						<div class="flex">
								<span class="sp1">绑定号码</span>
								<span class="sp2 phone">18670711522<i></i></span>
						</div>
               </div>
					<router-link  class="next" to="/detail/pay">
					    下一步
				    </router-link>
            </div>
        </div>
</template>
<script>
    export default{
		data(){
			return{

			}
		},
        components:{
			
		},
        	created(){
			document.title="课程报名";
		}
    }
</script>
<style lang="stylus" scoped>
    @import './apply.styl'
</style>




