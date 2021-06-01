import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
} from "vue-router";
import Main from "@/views/main/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        redirect: '/main'
    }, {
        path: "/main",
        name: "main",
        component: () => import("@/views/main/index.vue"), // 懒加载组件
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;