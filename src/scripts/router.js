import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);


import Login from "./views/login.vue";
import Gallery from "./views/gallery.vue";
import Setting from "./views/setting.vue";
import LatestUpload from "./views/latestUpload.vue";
import MostViewed from "./views/mostViewed.vue";
import LikeMost from "./views/likeMost.vue";
import SignUp from "./views/signUp.vue"


// 配置路由 routes
const routes = [{
        path: "/login",
        component: Login,
        name: "login"

    },
    {
        path: "/gallery",
        component: Gallery,
        name: "gallery",
        redirect: "/gallery/latestUpload",
        children: [{
                name: "latestUpload",
                path: "latestUpload",
                component: LatestUpload
            },
            {
                name: "mostViewed",
                path: "mostViewed",
                component: MostViewed
            },
            {
                name: "likeMost",
                path: "likeMost",
                component: LikeMost
            },
            {
                path: "*",
                redirect: "/gallery/latestUpload"
            }
        ]
    },
    {
        path: "/signUp",
        name: "signUp",
        component: SignUp
    },
    {
        path: "/setting",
        name: "setting",
        component: Setting
    },
    {
        path: "*",
        redirect: "/login"
    }
]
// 生成实例化 Router
const router = new VueRouter({
    routes,
    mode: "hash"
})

// router.push go 
export default router;