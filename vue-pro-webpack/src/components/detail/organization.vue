<template>
	<div>
		<detailhead></detailhead>
		<div class="list">
				<div class="pic">
					<s></s>
				</div>
				<div class="word">
					<h4>创知路教育机构</h4>
					<div class="star">
						<div>
							<!--<i></i><i></i><i></i><i></i><i></i>-->
							 <star :score="4"></star>
						    <span>4.0&nbsp;&nbsp;|&nbsp; &nbsp;120门课程</span>
						</div>
						<p>创知路教育,横跨高考-自主招生-竞赛-志愿规划领域。拥有100+位北大、清华研发团队成员。2016年培训学员中有500+进入清华、北大。独立研发教材30+本，举办线下集训100+场，录制完成1000+节视频网课，深受10000+位顶尖学员关注与喜爱。</p>
					</div>
					<a href="#">进入详情 ></a>
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
   @import './organization.styl'
</style>