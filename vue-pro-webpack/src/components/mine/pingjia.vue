<template>
  <div class="pingjia">
    <mt-header title="评价" class="nearby-title">
		<router-link to="/" slot="left">
			<i><</i> 返回
		</router-link>
		<mt-button icon="more" slot="right">
		</mt-button>
	</mt-header>
    <div class="star-box">
        <span>满意度</span>
        <ul>
            <li data-id="1"></li>
            <li data-id="2"></li>
            <li data-id="3"></li>
            <li data-id="4"></li>
            <li data-id="5"></li>
        </ul>
        <span class="score">0</span>
    </div>
    <form>
       <textarea class="evl" placeholder="亲，对课程您还满意吗？快来评价一下把。" nane="text"></textarea>
       <div class="fileBox" @click="addPic">
            <img  alt="" name="pic" id="preview" :src="images" >
            <input type="file" name="photo" class="file" id="f" @change="onFileChange">
       </div>
    </form>
    <div class="sub-box">
        <button class="sub">立即发表</button>
    </div>  
  </div>
</template>

<script>
import {grade} from '../../assets/js/common.js'
export default {
    data(){
        return{
          images:''
        }
    },
    methods: {
         addPic(e){
                // e.preventDefault();
                // $('input[type=file]').trigger('click');
                // return false;
            },
        onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                // if (!files.length)return; 
                this.createImage(files);
        },
        createImage(file) {
                // if(typeof FileReader==='undefined'){
                //     alert('您的浏览器不支持图片上传，请升级您的浏览器');
                //     return false;
                // }
                var image = new Image();         
                var vm = this;
                // var leng=file.length;
                // for(var i=0;i<leng;i++){
                    var reader = new FileReader();
                    reader.readAsDataURL(file[0]); 
                    reader.onload =function(e){
                    vm.images=e.target.result;                                
                    };                 
                }                        
    },       
    created(){
			document.title="评价";
    },
    mounted () {
        grade('ul',".score")
    }
}
</script>

<style lang="stylus" scoped>
  bg-image($url)
      background url($url + "@2x.png") no-repeat center/cover
      @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio:3)
          background url($url + "@3x.png") no-repeat center/cover
    .pingjia
        .star-box
            height 0.9rem
            line-height 0.9rem
            padding 0 0.2rem
            background #fff
            border-bottom  1px solid #f1f3ff
            // overflow hidden
            .common-star
                display inline-block
                margin-right 0.2rem
            span
                display inline-block
                vertical-align middle
                margin-right 0.2rem
                font-size 12px
                font-weight 300
                color #525252
        form
            padding 0.2rem
            background #fff
            .evl
                width 100%
                height 1.8rem
                font-size 12px
                resize none
                border none 
            .evl::-webkit-input-placeholder
                font-size 12px
                color #d3d3d3
            .fileBox
                display inline-block
                position relative
                width 1.2rem
                height 1.2rem
                bg-image("../../assets/img/add")
                background-size 0.36rem 0.36rem
                border 1px solid #dbdbdb
                .file
                    position absolute
                    top 0
                    left 0
                    width 100%
                    height 100%
                    opacity: 0;
                #preview
                    width 100%
                    height 100%
        .sub-box
            padding 0.4rem 0.2rem 0 0.2rem   
            .sub
                width 100%         
                height 0.8rem
                line-height 0.8rem
                text-align center
                border-radius 0.2rem
                border none 
                font-size 15px
                font-weight 900
                color #fff
                background: linear-gradient(#35b05d, #41cc6e);
        ul
            display inline-block
            li
                float left
                width 0.24rem
                height 0.24rem
                margin-right 0.1rem
                bg-image("../../assets/img/star")     
            .ratestar
                bg-image("../../assets/img/star-jihuo")      
</style>
