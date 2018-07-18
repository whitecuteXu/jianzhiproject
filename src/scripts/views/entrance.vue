<template>
    <div class="entrance">
        <Head :title="title" :show="true" />
        <img :src="image" />
        <button class="btn" @click="addCompetition()">{{text}}</button>
        <Foot :footList="footList" />
    </div>
</template>

<script>
    import Foot from "../components/foot.vue";
    import Detail_on from "../../assets/images/detail_on.png";
    import Detail_off from "../../assets/images/detail_off.png";
    import Me_on from "../../assets/images/me_on.png";
    import Me_off from "../../assets/images/me_off.png";
    import Enter from "../../assets/images/enter.png";

    export default {
        data() {
            return {
                title: "活动详情",
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
                ],
                image: Enter,
                text: "报名"
            }
        },
        components: {
            Foot
        },
        methods: {
            addCompetition() {
                window.location.href = "#/signUp/regForm";
            }
        }
    }
</script>