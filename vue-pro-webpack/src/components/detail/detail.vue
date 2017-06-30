<template>
	<div class="main">
		<detailhead></detailhead>
        <div class="title1">
			<!--介绍-->
			<div class="free">
				<span></span>
				<h4>高三语文专项（适用高中年级）</h4>
			</div>
			<div class="scoe clearfix">
				<!--<span class="star"><i></i><i></i><i></i><i></i><i></i></span> -->
				<star :score='5'></star>
				<span class="join">5.0 &nbsp;&nbsp;&nbsp;已有1273人报名参加</span>
			</div>
			<div>
				<ul>
					<li><i></i>线下班课</li>
					<li><i></i>认证机构</li>
					<li><i></i>支付保障</li>
					<li><i></i>随时可退</li>				
				</ul>
			</div>
		</div>
		<!--课程详情-->
		<div class="divide"></div>
		<div class="detail">
			<h4>课程详情</h4>
			<p class="p1">本课程为2017届语文阅读写作课程</p>
			<p>与寒假班相比，增加了阅读课程。阅读与作文在很多人眼中都是洪水猛兽，避之不得。可是阅读占了25分，作文占了60分，分值比例都比较大。此次课程恰能够解决占语文半数以上分值的题目。在佳俊学长的带领下，学子们能够遨游在语文的海洋，一边提分值，一边增强语文素养。跟着老师好好学习，自己在下面努力，这样语文分数的提升就会水到渠成。师父领进门，修行在个人。如果自己不努力，再强的老师也无能为力。跟着佳俊学长，语文自然提分！
				</p>
				<!--图片-->
			<div class="pics">
				<div class="pic pic1"></div>
			    <div class="pic pic2"></div>
			</div>
				<!--安排-->
			<div class="plan">
				<div>
					<h4>适学阶段</h4>
					<p>高中一年级 | 高中二年级 | 高中三年级</p>
				</div>
				<div>
					<h4>课时安排</h4>
					<p>共 13 课时</p>
				</div>
				<div>
					<h4>课程学期</h4>
					<p>2017.07.15 开始 - 2017.08.14结束</p>
				</div>
			</div>
		</div>
		<div class="divide"></div>
		<!--所属机构-->
		<div class="belong">
			<h4>所属机构</h4>
			<div>
				<div class="left">

				</div>
				<div class="right">
					<h4>创知路教育机构</h4>
					<div><star :score='4'></star><span class="word"> 4.0 &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;120门课程</span></div>
					<p>创知路教育,横跨高考-自主招生-竞赛-志愿规划领域。拥有100+位北大、清华研发团队成员。2016年培训学员中有500+进入清华、北大。独立研发教材30+本，举办线下集训100+场，录制完成1000+节视频网课，深受10000+位顶尖学员关注与喜爱。
					</p>
				</div>
			</div>
		</div>
		<!-- 底部 -->
		<detailfooter></detailfooter>
	</div>
</template>

<script>
   import detailhead from '../common/detailhead';
   import detailfooter from '../common/detailfooter';
   import star from '../common/star';
	export default{
		components:{
			detailhead,
			detailfooter,
			star
		},
		created(){
			document.title="学习阶段";
		}
	}

</script>

<style lang="stylus" scoped>
    @import './detail.styl'
</style>
