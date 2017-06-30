<template>
	<div>
		<detailhead></detailhead>
		<div class="top">
			<div class="left tac fl">
				<div>98分</div>
				<div>综合评价</div>
			</div>
			<div class="right">
				<div>
					<i></i>
					<div>
						<p>好评</p>
					    <span>128</span>
					</div>
				</div>
				<div>
					<i></i>
					<div>
						<p>中评</p>
					    <span>20</span>
					</div>
				</div>
				<div>
					<i></i>
					<div>
						<p>差评</p>
					    <span>3</span>
					</div>
				</div>
			</div>
		</div>
		<div class="divide"></div>
		<div class="lists">
			<div class="list">
				<div class="pic">
					<s></s>
					<p>小公主</p>
				</div>
				<div class="word">
					<div class="star">
						<div>
							<!--<i></i><i></i><i></i><i></i><i></i>-->
							<star :score='4'></star>
						    <span class="sp2">4.0&nbsp;&nbsp; | &nbsp;&nbsp;11:38</span>
						</div>
						<p>学习心得：通过这几节课的学习，感觉不仅收获了知识，还收获了许多文化以及做做事的准则，很好，感觉自己沉迷在这样的课程上了。</p>
					</div>
				</div>
			</div>
			<div class="divide"></div>
			<div class="list second">
				<div class="pic">
					<s></s>
					<p>张君雅</p>
				</div>
				<div class="word">
					<div class="star">
						<div>
							<!--<i></i><i></i><i></i><i></i><i></i>-->
							<star :score='4'></star>
						     <span>5.0 &nbsp;&nbsp;| &nbsp;&nbsp;昨天</span>
						</div>
						<p>听老师讲了这么多课下来，收获真的很大，很感谢老师这么多节的授课。给我很多学习的动力，增加我学习的信心。</p>
					</div>
				</div>
			</div>
			<div class="divide"></div>
			<div class="list last">
				<div class="pic">
					<s></s>
					<p>黄小晓</p>
				</div>
				<div class="word">
					<div class="star">
					    <div>
							<!--<i></i><i></i><i></i><i></i><i></i>-->
							<star :score='4'></star>
						    <span>5.0&nbsp;&nbsp; |&nbsp;&nbsp; 11:38</span>
						</div>
						<p>条理非常清晰、开头复习、结尾总结，词汇细致、讲解认真，棒！棒！棒！</p>
					</div>
				</div>
				<p class="res"><i></i>回复：感谢亲的支持，您的肯定是对教育事业莫大的帮助</p>
			</div>
		</div>
		<detailfooter></detailfooter>
	</div>
</template>

<script>
import detailhead from '../common/detailhead'
import detailfooter from '../common/detailfooter'
import star from '../common/star'
	export default{
		components:{
			detailhead,
			detailfooter,
			star
		}
	}
</script>
<style lang="stylus" scoped>
   @import './evaluate.styl'
</style>
