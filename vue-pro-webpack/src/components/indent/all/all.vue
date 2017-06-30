<template>
    <div class="indent">
        <!-- 利用mint-ui中的header组件实现整个系统的头部 -->
        <mt-header title="我的订单">
            <router-link to="/" slot="left">
                <i>
                    <</i> 返回
            </router-link>
            <mt-button icon="more" slot="right">
            </mt-button>
        </mt-header>
        <div class="top-ban">
        </div>
    
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/indent/all">
                <span class="mui-tab-label">全部</span>
            </router-link>
            <router-link class="mui-tab-item" to="/a">
                <span class="mui-tab-label">待支付</span>
            </router-link>
            <router-link class="mui-tab-item" to="/s">
                <span class="mui-tab-label">待使用</span>
            </router-link>
            <router-link class="mui-tab-item" to="/d">
                <span class="mui-tab-label">待评价</span>
            </router-link>
            </router-link>
            <router-link class="mui-tab-item" to="/d">
                <span class="mui-tab-label">退款</span>
            </router-link>
        </nav>
        <div class="program">
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>待支付</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="pay">立即支付</span>
                    <span class="cancel" @click='cancel'>取消订单</span>
                    <span class="consult">在线咨询</span>
                </div>
            </div>
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>待使用</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="pay">退款</span>
                    <span class="consult">在线咨询</span>
                </div>
            </div>
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>待使用</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="pay">退款</span>
                    <span class="consult">在线咨询</span>
                </div>
            </div>
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>待评价</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="pay">立即评价</span>
                    <span class="consult">在线咨询</span>
                </div>
            </div>
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>已完成</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="cancel">删除订单</span>
                    <span class="consult">在线咨询</span>
    
                </div>
            </div>
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>退款中</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="consult">在线咨询</span>
                </div>
            </div>
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>已退款</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="cancel">删除订单</span>
                    <span class="consult">在线咨询</span>
                </div>
            </div>
            <div class="item">
                <div>
                    <s></s>
                    <span>创知路教育机构</span>
                    <span></span>
                    <span>已取消</span>
                </div>
                <div>
                    <i></i>
                    <div class="msg">
                        <h4>高三语文专项（适用高年级）</h4>
                        <span>￥1899.00</span>
                        <div>订单号：10887540</div>
                    </div>
                </div>
                <div class="option">
                    <span class="cancel">删除订单</span>
                    <span class="consult">在线咨询</span>
                </div>
            </div>
        </div>
        <div class="reimburse" ref="reimburse">
            <div ref="div">
                <div>
                    <h4>是否要退款？</h4>
                    <p>申请退款后， 订单中生成的二维码将失效</p>
                    <span>提交后， 3个工作日内费用原路返回</span>
                </div>
                <div>
                    <span @click='sure'>确定</span>
                    <span @click='no'>取消</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        cancel(){
            this.$refs.reimburse.style.display='block';
            // this.$refs.reimburse.style.transform='scale(1)';
            document.body.style.overflow='hidden'
        },
        sure(){
             this.$refs.reimburse.style.display='none';
            // this.$refs.reimburse.style.transform='scale(0)';
            document.body.style.overflow=''
        },
        no(){
             this.$refs.reimburse.style.display='none';
            // this.$refs.reimburse.style.transform='scale(0)';
            document.body.style.overflow=''
        },
    }
}
</script>
<style lang='stylus' scoped>
		@import './all.styl'
</style>