<template>
    	<div class="pay">
            <!-- 利用mint-ui中的header组件实现整个系统的头部 -->
			<mt-header title="订单支付">
				<router-link to="/" slot="left">
					<i><</i> 返回
				</router-link>
				<mt-button icon="more" slot="right">
				</mt-button>
			</mt-header>
            <div class="main">
                <div class="top">
                    <i></i><span>请在<s> 2017.05.21 16:27 </s>前完成支付，逾期取消！</span>
                </div>
				<div class="indent">
					<div>
						<span>订单号</span>
						<span>87456910</span>
					</div>
					<div>
						<span>订单金额</span>
						<span>￥0.00</span>
					</div>
					<div>
						<span>课程名称</span>
						<span>高三语文专项（适用高中年级）</span>
					</div>
				</div>
				<div class="chose">
					<div @click='change1'>
						<i></i>
						<span>微信支付</span>
						<s :class="{'check':toggle,'uncheck':!toggle}"></s>
					</div>
					<div @click='change2'>
						<i></i>
						<span>支付宝支付</span>
						<s :class="{'check':toggle1,'uncheck':!toggle1}"></s>
					</div>
				</div>
				<div class="affirm">
					<router-link  to="/detail/result">
					    确认支付
				    </router-link>
				</div>
            </div>
        </div>
</template>
<script>
    export default {
	data() {
		return {
			toggle: true,
			toggle1: false,
		}
	},
	components: {

	},
	created() {
		document.title = "订单支付";
	},
	methods: {
		change1() {
			this.toggle = !this.toggle;
			this.toggle1 = false;
		},
		change2() {
			this.toggle1 = !this.toggle1;
			this.toggle = false;
		},
	}
}
</script>
<style lang="stylus" scoped>
    @import './pay.styl'
</style>