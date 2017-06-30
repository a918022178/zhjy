<template>
    	<div class="result">
            <!-- 利用mint-ui中的header组件实现整个系统的头部 -->
			<mt-header title="支付结果">
				<router-link to="/" slot="left">
					<i><</i> 返回
				</router-link>
				<mt-button icon="more" slot="right">
				</mt-button>
			</mt-header>
            <div class="main">
				<div class="success">
					<div>
						<i></i>
						<p>恭喜您支付成功！</p>
					</div>
					<div class="flex">
						<span>订单号</span>
						<span>87456910</span>
					</div>	
					<div class="flex">
						<span>有效期至</span>
						<span>2017.06.17</span>
					</div>	
					<div>
						<s></s>
					</div>	
					<div>
						<p>向机构报名点出示入学券办理入学上课</p>
					</div>		
				</div>
				<div class="check">
					<router-link  to="/detail、">
					    查看订单
				    </router-link>
				</div>
            </div>
        </div>
</template>
<script>
    export default{
        components:{
			
		},
        	created(){
			document.title="支付结果";
		}
    }
</script>
<style lang="stylus" scoped>
    @import './result.styl'
</style>