<template>
    <div id='location'>
        <mt-index-list>
            <div class="title">当前城市定位</div>
                <router-link to="/home/长沙市" class="cur">长沙市 <span><i></i>重新定位</span></router-link>
            <div class="title">经常选择城市</div>
            <ul class="offen">
                <li><router-link to="/home/长沙市">长沙市</router-link></li>
                <li><router-link to='/home/北京市'>北京市</router-link></li>
                <li><router-link to="/home/海口市" @click.native="setStorage1">海口市</router-link></li>
            </ul>
            <mt-index-section index="A">
                <router-link to="/home/鞍山市" data-id="210300">鞍山市</router-link>
                <router-link to="/home/安庆市" data-id="340800">安庆市</router-link>
                <router-link to="/home/安阳市" data-id="410500">安阳市</router-link>
            </mt-index-section>
            <mt-index-section index="B">
                <router-link to="/home/北京市" data-id="110100">北京市</router-link>
            </mt-index-section>
            <mt-index-section index="C">
                <router-link to="/home/长春市" data-id="220100">长春市</router-link>
                <router-link to="/home/郴州市" data-id="431000">郴州市</router-link>
                <router-link to="/home/长沙市" data-id="430100">长沙市</router-link>
                <router-link to="/home/常德市" data-id="430700">常德市</router-link>
                <router-link to="/home/重庆市" data-id="500100">重庆市</router-link>
                <router-link to="/home/成都市" data-id="510100">成都市</router-link>
                
            </mt-index-section>
            <mt-index-section index="D">

                <router-link to="/home" data-id="210200">大连市</router-link>
            </mt-index-section>
            <mt-index-section index="E">
                <router-link to="/home/鄂州市" data-id="420700">鄂州市</router-link>
            </mt-index-section>
            <mt-index-section index="F">
                <router-link to="/home/福州市" title="Zack">福州市</router-link>
                <router-link to="/home/佛山市" title="Zane">佛山市</router-link>
            </mt-index-section>
            <mt-index-section index="G">
                <router-link to="/home/广州市" title="Zack">广州市</router-link>
                <router-link to="/home/桂林市" title="Zane">桂林市</router-link>
                <router-link to="/home/贵阳市" title="Zane">贵阳市</router-link>
            </mt-index-section>
            <mt-index-section index="H">
                <router-link to="/home/海口市" title="Zack">海口市</router-link>
            </mt-index-section>
            <mt-index-section index="J">
                <router-link to="/home/嘉兴市" title="Zack">嘉兴市</router-link>
            </mt-index-section>
            <mt-index-section index="K">
                <router-link to="/home/昆明市" title="Zack">昆明市</router-link>
            </mt-index-section>
            <mt-index-section index="L">
                <router-link to="/home/娄底市" title="Zack">娄底市</router-link>
            </mt-index-section>
            <mt-index-section index="M">
                <router-link to="/home/绵阳市" title="Zack">绵阳市</router-link>
            </mt-index-section>
            <mt-index-section index="N">
                <router-link to="/home/南京市" title="Zack">南京市</router-link>
                <router-link to="/home/南昌市" title="Zane">南昌市</router-link>
            </mt-index-section>
            <mt-index-section index="Q">
                <router-link to="/home/青岛市" title="Zack">青岛市</router-link>
            </mt-index-section>
            <mt-index-section index="S">
                <router-link to="/home/三亚市" title="Zack">三亚市</router-link>
                <router-link to="/home/上海市" title="Zane">上海市</router-link>
                <router-link to="/home/深圳市" title="Zane">深圳市</router-link>
            </mt-index-section>
            <mt-index-section index="X">
                <router-link to="/home/湘潭市" title="Zack">湘潭市</router-link>
                <router-link to="/home/厦门市" title="Zane">厦门市</router-link>
            </mt-index-section>
            <mt-index-section index="Y">
                <router-link to="/home/岳阳市" title="Zack">岳阳市</router-link>
            </mt-index-section>
            <mt-index-section index="Z">
                <router-link to="/home/张家界市" title="Zack">张家界市</router-link>
                <router-link to="/home/株洲市" title="Zane">株洲市</router-link>
            </mt-index-section>
        </mt-index-list>           
    </div>
</template>

<script>
export default {
    name: 'name',
    methods:{
        setStorage1(){
            console.log(222)
            if(localStorage.getItem('key')){
                console.log(33)
                localStorage.removeItem('key')
                localStorage.setItem('key',"哈22")
            }else{
                localStorage.setItem('key',"哈22")
            }
        }
        
    }
}
</script>

<style scoped lang="stylus">
 bg-image($url)
    background-repeat no-repeat
    background-image url($url + "@2x.png")
    @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio:3)
        background-repeat no-repeat
        background-image url($url + "@3x.png")
 #location
    width 100%
    height 100%
    .mint-indexlist
        .mint-indexlist-content
            width 100%
            .title
                width: 100%;
                height: 31px;
                line-height:31px
                padding-left:10px
                font-size:12px
                color:#525252
            .cur
                display:inline-block
                width: 100%;
                height: 40px;
                padding-left:10px;
                line-height:40px
                font-size:14px
                color:#3b3b3b
                background:#fff
                span
                    float right
                    margin-right 20px
                    font-size 13px;
                    color #2e8ae8
                    i
                        display inline-block
                        width 13px
                        height 13px
                        margin-right 5px
                        background-size 13px 13px
                        vertical-align middle
                        bg-image("../../assets/img/location1_")

                


            .offen
                background:#fff
                li
                    a
                        display:inline-block
                        width: 100%;
                        height: 40px;
                        padding-left:10px
                        line-height:40px
                        font-size:14px
                        color:#3b3b3b
                        border-bottom:1px solid #f1f3ff
            .mint-indexsection
                ul                    
                    a
                        display block
                        width: 100%;
                        height: 40px;
                        padding-left:10px
                        line-height:40px
                        font-size:14px
                        color:#3b3b3b
                        background:#fff
                        border-bottom:1px solid #f1f3ff

            


</style>