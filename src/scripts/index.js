// 创建  vue  根实例

import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

import Login from "./views/login.vue";

import MintUI from "mint-ui";
Vue.use(MintUI);


import Head from "./components/head.vue";
Vue.component("Head", Head);

import router from "./router";


import store from "./vuex/store";


const vm = new Vue({
    el: "#app",
    router,
    store,
    template: "",
    components: {
        Login,
    },
})