<template>
    <!-- 我的 -->
    <div class="mine">
        <Head :title="title" :show="true" />
        <div class="mineList">
            <div class="row">
                <p>{{text}}</p>
                <span>{{date}}</span>
            </div>
            <div class="row">
                <p>{{popularity}}</p>
                <i class="iconfont icon-right" @click="goPopular()"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "我的",
                text: "中国首届文案征集大赛",
                date: "2016-12-12",
                popularity: "我的人气"
            }
        },
        methods: {
            goPopular() {

            }
        }
    }
</script>