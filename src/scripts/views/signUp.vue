<template>
    <div class="signUp">
        <Head :title="title" :show="true" />
        <Banner :banner="imageList" />
        <div class="listShadow">
            <div class="list">
                <div class="row" v-for="(mes,idx) in messageList" :key="idx">
                    <div class="left">
                        <p class="textTop">{{mes.textTop}}</p>
                        <p class="textBottom">{{mes.textBottom}}</p>
                    </div>
                    <div class="right">
                        <i class="iconfont icon-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from "../components/banner.vue";
    export default {
        data() {
            return {
                title: "活动详情",
                imageList: [{
                    src: "https://api.vtrois.com/image/750x280",
                    alt: "第1张图片"
                }],
                messageList: [{
                        textTop: "中国首届LOGO设计大赛",
                        textBottom: "九月上旬"
                    },
                    {
                        textTop: "一句话广告语征集大赛",
                        textBottom: "九月上旬"
                    },
                    {
                        textTop: "吉祥物征集大赛",
                        textBottom: "九月上旬"
                    }, {
                        textTop: "中国首届LOGP设计大赛",
                        textBottom: "九月上旬"
                    }
                ]
            }
        },
        components: {
            Banner
        }
    }
</script>