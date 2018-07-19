<template>
    <!-- 我的作品页面 -->
    <div class="work">
        <Head :title="title" :show="true" />
        <div class="list" v-if="true">
            <div class="listHead clearfix">
                <span class="line"></span>
                <span class="circle"></span>
                <p class="title">{{ranking}}</p>
                <span class="circle"></span>
                <span class="line"></span>
            </div>
            <div class="headtext clearfix" v-if="true">
                <h3>{{worker}}</h3>
                <h4>{{bonus}}:{{count}}</h4>
            </div>
            <p class="content">{{content}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "我的",
                ranking: "一等奖",
                worker: "张三",
                bonus: "奖金",
                count: "600",
                content: "征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案、征集文案。"
            }
        }
    }
</script>