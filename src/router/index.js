import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";

Vue.use(VueRouter);

// 로그인
const LoginView = () => import("@/views/join/LoginView.vue");

// 건강관리
const HealthView = () => import("@/views/health/HealthView.vue");
const HealthRecordView = () => import("@/views/health/HealthRecordView.vue");

// 마이페이지
const MypageView = () => import("@/views/mypage/MypageView.vue");
// 밴드
const BandView = () => import("@/views/band/BandView.vue"); //밴드 메인
const BandSyncCp = () => import("@/components/band/BandSyncCp.vue"); // 기기 동기화
const BandSettingCp = () => import("@/components/band/BandSettingCp.vue"); // 기기 선택 전 상태
const BandDeviceCp = () => import("@/components/band/BandDeviceCp.vue"); // 기기 목록
const BandSearchCp = () => import("@/components/band/BandSearchCp.vue"); // 기기 검색

// 멤버쉽 카드
const MbershipView = () => import("@/views/mbership/MbershipView.vue");

// 알림
const AlarmView = () => import("@/views/alarm/AlarmView.vue");

// 공지사항
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
        path: "sync",
        name: "band-sync",
        component: BandSyncCp,
      },
      {
        path: "setting",
        name: "band-setting",
        component: BandSettingCp,
      },
      {
        path: "device",
        name: "band-device",
        component: BandDeviceCp,
      },
      {
        path: "search",
        name: "band-search",
        component: BandSearchCp,
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
