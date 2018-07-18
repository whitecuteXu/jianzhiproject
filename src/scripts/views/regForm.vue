<template>
    <div class="regForm">
        <Head :title="title" :show="true" />
        <div class="top">
            <div class="formHead" v-for="(ad,idx) in topAdText" :key="idx">
                <div class="left">
                    <p>{{ad.label}}</p>
                </div>
                <div class="right">
                    <input type="text" :placeholder="ad.tips" />
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="formBody" v-for="(user,idx) in userInfo" :key="idx">
                <div class="left">
                    <p>{{user.label}}</p>
                </div>
                <div class="right">
                    <input type="text" :placeholder="user.text" />
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" @click="submitForm()">{{button}}</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "大赛报名",
                topAdText: [{
                        label: "广告语",
                        tips: "请输入你具有创意的广告语"
                    },
                    {
                        label: "广告寓意",
                        tips: "请输入你对自己广告语的诠释"
                    }
                ],
                userInfo: [{
                        label: "姓名",
                        text: "请输入姓名"
                    },
                    {
                        label: "手机号",
                        text: "请输入手机号"
                    },
                    {
                        label: "邮箱",
                        text: "请输入邮箱"
                    },
                    {
                        label: "QQ号",
                        text: "请输入QQ号"
                    },
                    {
                        label: "微信号",
                        text: "请输入微信号"
                    },
                    {
                        label: "所在学校",
                        text: "请输入所在学校"
                    },
                    {
                        label: "所在院系",
                        text: "请输入所在院系"
                    }
                ],
                button: "提交"
            }
        },
        methods: {
            submitForm() {
                window.location.href = "#/setting";
            }
        }
    }
</script>