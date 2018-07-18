<template>
    <div class="signUp">
        <Head :title="title" :show="true" />
        <Banner :banner="imageList" />
        <div class="listShadow">
            <div class="list">
                <div class="row" v-for="(mes,idx) in messageList" :key="idx" @click="entrance(mes.id)">
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
        <Foot :footList="footList" />
    </div>
</template>

<script>
    import Banner from "../components/banner.vue";
    import Foot from "../components/foot.vue";
    import Banner1 from "../../assets/images/banner1.png";
    import Banner2 from "../../assets/images/banner2.png";
    import Detail_on from "../../assets/images/detail_on.png";
    import Detail_off from "../../assets/images/detail_off.png";
    import Me_on from "../../assets/images/me_on.png";
    import Me_off from "../../assets/images/me_off.png";

    export default {
        data() {
            return {
                title: "活动详情",
                imageList: [{
                    src: Banner1,
                    alt: "第1张图片",
                    show: true,
                    id: 1
                }, {
                    src: Banner2,
                    alt: "第2张图片",
                    show: false,
                    id: 2
                }],
                messageList: [{
                        textTop: "中国首届LOGO设计大赛",
                        textBottom: "九月上旬",
                        id: 3
                    },
                    {
                        textTop: "一句话广告语征集大赛",
                        textBottom: "九月上旬",
                        id: 4
                    },
                    {
                        textTop: "吉祥物征集大赛",
                        textBottom: "九月上旬",
                        id: 5
                    }, {
                        textTop: "中国首届LOGP设计大赛",
                        textBottom: "九月上旬",
                        id: 6
                    }
                ],
                footList: [{
                        image: Detail_on,
                        text: "活动详情",
                        active: "on",
                        show: true
                    },
                    {
                        image: Detail_off,
                        text: "活动详情",
                        active: "off",
                        show: false
                    },
                    {
                        image: Me_on,
                        text: "我的",
                        active: "on",
                        show: false
                    },
                    {
                        image: Me_off,
                        text: "我的",
                        active: "off",
                        show: true
                    }
                ]
            }
        },
        components: {
            Banner,
            Foot
        },
        methods: {
            entrance(id) {
                window.location.href = "#/signUp/entrance/" + id;
            }
        }
    }
</script>