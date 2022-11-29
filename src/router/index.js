import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";

Vue.use(VueRouter);

const LoginView = () => import("@/views/join/LoginView.vue");
const HealthView = () => import("@/views/health/HealthView.vue");
const HealthRecordView = () => import("@/views/health/HealthRecordView.vue");
const MypageView = () => import("@/views/mypage/MypageView.vue");
const BandView = () => import("@/views/band/BandView.vue");
const BandMainCp = () => import("@/components/band/BandMainCp.vue");
const BandSettingView = () => import("@/views/band/BandSettingView.vue");
const MbershipView = () => import("@/views/mbership/MbershipView.vue");
const AlarmView = () => import("@/views/alarm/AlarmView.vue");
const NoticeView = () => import("@/views/notice/NoticeView.vue");

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
    component: LoginView,
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
    component: HealthRecordView,
  },
  // mypage
  {
    path: "/mypage",
    name: "mypage",
    component: MypageView,
  },
  // band
  {
    path: "/band",
    name: "band",
    component: BandView,
    children: [
      {
        path: "main",
        name: "band-main",
        component: BandMainCp,
      },
      {
        path: "setting",
        name: "band-setting",
        component: BandSettingView,
      },
    ],
  },

  // mbership
  {
    path: "/mbership",
    name: "mbership",
    component: MbershipView,
  },
  // alarm
  {
    path: "/alram",
    name: "alram",
    component: AlarmView,
  },
  // notice
  {
    path: "/notice",
    name: "notice",
    component: NoticeView,
  },
  {
    path: "*",
    name: "notice",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
