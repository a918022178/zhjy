<template>
    	<div>
            <!-- 利用mint-ui中的header组件实现整个系统的头部 -->
			<mt-header title="学习阶段">
				<router-link to="/" slot="left">
					<i><</i> 返回
				</router-link>
				<mt-button icon="more" slot="right">
				</mt-button>
			</mt-header>
			<div class="top-ban">	 
			</div>
			<!-- 利用mui中的tabbar组件实现系统的tab切换 -->
			<nav class="mui-bar mui-bar-tab">
				<router-link class="mui-tab-item " to="/detail">
					<span class="mui-tab-label">详情</span>
				</router-link>
				<router-link class="mui-tab-item" to="/program">
					<span class="mui-tab-label">大纲</span>
				</router-link>
				<router-link class="mui-tab-item" to="/evaluate">
					<span class="mui-tab-label">评价</span>
				</router-link>
				<router-link class="mui-tab-item" to="/organization">
					<span class="mui-tab-label">机构</span>
				</router-link>
			</nav>
			<div class="divide"></div>
        </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
		header a{
			color: white !important;
			  display: inline-block;
				
		}
		header a i{
		font: 700 16px/34px simsun
		}
		.divide {
			background: #eaedff;
		}

		.router-link-active {
			color: #007aff;
		}
		.divide{
			height: 0.1rem;
		}
        .mint-header{
			background: black;
			position: fixed;
			top: 0;
			left:0;
			width: 100%;
			z-index: 13;
			height: 0.8rem;
		}
		.mui-bar{
			position: relative;
			box-shadow: none;
			background: white;
			height: 0.8rem;
		}
		.router-link-active span::before{
			content:'';
			height: 2px;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background: linear-gradient( 90deg,#41cc6e, #35b05d)
		  }
		.mui-tab-item span{
			font-family: '微软雅黑';
				background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#41cc6e), to(#35b05d));
				-webkit-background-clip: text;
				-webkit-text-fill-color:transparent;
		}
		.mui-tab-item{
			padding: 0 0.2rem;
			width: 25%;
			float: left;
			text-align: center;
			height: 100%;
			text-decoration: none;
			
		}
		.mui-tab-item span{
			position: relative;
			display: block;
			color: #41cc6e;
			font-size: 15px;
			line-height: 0.8rem;
		}
		.top-ban{
			margin-top: 0.8rem;
			width: 100%;
			height: 3.07rem;
			background: url('../../assets/img/banner.png')  no-repeat center/cover;
		}

		.fl {
			float: left;
		}

		.fr {
			float: right;
		}


		.tac {
			text-align: center;
		}

		*{
			box-sizing: border-box;
		}
</style>