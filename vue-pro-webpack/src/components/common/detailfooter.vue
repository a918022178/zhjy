<template>
    <div>
        <!-- 底部 -->
		<div class="footer">
			<ul>
			<li>
				<div></div>
				<div>咨询</div>
			</li>
			<li>
				<div></div>
				<div>电话</div>
			</li>
			<li>
				<div></div>
				<div>收藏</div>
			</li>
			<li>
				<router-link class="apply" to="/detail/apply">
					立即报名
				</router-link>
			</li>
			</ul>
		</div>
		<div class="mb"></div>
    </div>	
</template>
<script>

</script>
<style scoped>
    		/*底部*/
			.apply{
				color: white;
			}
		    .footer{
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 1rem;
				background: white;
			}
			.footer ul{
				list-style: none;
				overflow: hidden;
			}
			.footer ul li{
				float: left;
				/*line-height: 50px;*/
				width: 15%;
				margin-left:5%;
				color: #525252;
				font-size: 12px;
			}
			.footer ul li:nth-child(4){
			margin: 0;
			width: 40%;
			font-size: 16px;
			font-family: 'macrosoft yahei';
			text-align: center;
			color: white;
			 background: linear-gradient(#35b05d, #41cc6e);
			line-height: 1rem;
			}
			.footer ul li div:nth-child(1){
				width: 0.48rem;
				height: 0.48rem;
				margin-top: 0.08rem;
			}
			.footer ul li:nth-child(1) div:nth-child(1){
				background: url('../../assets/img/icon_advisory@2x.png')  no-repeat center/cover;
			}
			.footer ul li:nth-child(2) div:nth-child(1){
				background: url('../../assets/img/icon_phone@2x.png')  no-repeat center/cover;
			}
			.footer ul li:nth-child(3) div:nth-child(1){
				background: url('../../assets/img/icon_Collection@2x.png')  no-repeat center/cover;
			}
</style>