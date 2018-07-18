<template>
    <mt-header :title="title">
        <div slot="left" v-show="show" @click="goBack()">
            <mt-button icon="back">返回</mt-button>
        </div>
    </mt-header>
</template>

<script>
    import router from "../router";
    export default {
        props: ["title", "show"],
        methods: {
            goBack() {
                router.go(-1);

            }
        }
    }
</script>