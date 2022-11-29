import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import HealthView from "../views/health/HealthView.vue";

Vue.use(VueRouter);

const routes = [
  // home
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // login
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/join/LoginView.vue"),
  },
  // health
  {
    path: "/health",
    name: "health",
    component: HealthView,
  },
  {
    path: "/healthRecord",
    name: "healthRecord",
    component: () =>
      import(
        /* webpackChunkName: "healthRecord" */ "@/views/health/HealthRecordView.vue"
      ),
  },
  // mypage
  {
    path: "/mypage",
    name: "mypage",
    component: () =>
      import(/* webpackChunkName: "mypage" */ "@/views/mypage/MypageView.vue"),
  },
  // band
  {
    path: "/band",
    name: "band",
    component: () =>
      import(/* webpackChunkName: "band" */ "@/views/band/BandView.vue"),
  },
  {
    path: "/band-setting",
    name: "band-setting",
    component: () =>
      import(/* webpackChunkName: "band" */ "@/views/band/BandSettingView.vue"),
  },
  // mbership
  {
    path: "/mbership",
    name: "mbership",
    component: () =>
      import(
        /* webpackChunkName: "mbership" */ "@/views/mbership/MbershipView.vue"
      ),
  },
  // alarm
  {
    path: "/alram",
    name: "alram",
    component: () =>
      import(/* webpackChunkName: "alarm" */ "@/views/alarm/AlarmView.vue"),
  },
  // notice
  {
    path: "/notice",
    name: "notice",
    component: () =>
      import(/* webpackChunkName: "notice" */ "@/views/notice/NoticeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
