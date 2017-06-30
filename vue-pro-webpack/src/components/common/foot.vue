<template>
    <div class="foot">
         <router-link to="/home" class="link">
             <i class="iconfont icon-home"></i>
             <div>首页</div>
         </router-link>
           <router-link to="/nearby" class="link">
             <i class="iconfont icon-nearby"></i>
             <div>附近</div>
         </router-link>
           <router-link to="/search" class="link">
             <i class="iconfont icon-search"></i>
             <div>搜索</div>
         </router-link>
           <router-link to="/mine" class="link">
             <i class="iconfont icon-mine"></i>
             <div>我的</div>
         </router-link>
    </div>
</template>
<script>
    export default{

    }
</script>
<style lang="stylus" scoped>
    .foot{
        position: fixed;
        left: 0;
        bottom: 0;
        display:flex;
        width: 100%;
        height: 56px;
        border-top:1px solid #ccc;
        background: rgb(247, 247, 247);
        .link{
            flex: 1;
            height:100%;
            padding-top:10px;
            text-align: center;
            color:#525252;
            i{
                display:inline-block;
                font-size: 24px;
                margin-bottom: 5px;             
            }
            div{
                font-size: 10px;
                line-height: 10px;
            }
        }
        .router-link-active{
            color:#35b05d;
        }
    }
</style>