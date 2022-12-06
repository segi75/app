import HealthMainCpVue from "@/components/health/HealthMainCp.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";

Vue.use(VueRouter);

// 로그인
const LoginView = () => import("@/views/join/LoginView.vue");
// 로그인

// 건강관리
const HealthView = () => import("@/views/health/HealthView.vue");
const HealthMainCp = () => import("@/components/health/HealthMainCp.vue");
const HealthRecordCp = () => import("@/components/health/HealthRecordCp.vue");
// 건강관리

// 마이페이지
const MypageView = () => import("@/views/mypage/MypageView.vue");
// 마이페이지

// 밴드
const BandView = () => import("@/views/band/BandView.vue"); //밴드 메인

const BandSyncCp = () => import("@/components/band/BandSyncCp.vue"); // 기기 동기화
const BandInfoCp = () => import("@/components/band/BandInfoCp.vue"); // 선택된 밴드 정보 설정
const BnadInfoMainCp = () =>
  import("@/components/band/info/BandInfoMainCp.vue"); //
const BandInfoAlarmCp = () =>
  import("@/components/band/info/BandInfoAlarmCp.vue"); // 선택된 밴드 알림

const BandSettingCp = () => import("@/components/band/BandSettingCp.vue"); // 기기 선택 전 상태
const BandDeviceCp = () => import("@/components/band/BandDeviceCp.vue"); // 기기 목록

const BandDeviceSelectCp = () =>
  import("@/components/band/device/BandDeviceSelectCp.vue"); // 디바이스 선택화면
const BandDeviceBand2Cp = () =>
  import("@/components/band/device/BandDeviceBand2Cp.vue"); // 디바이스 band2 선택된 화면
const BandDeviceBand3Cp = () =>
  import("@/components/band/device/BandDeviceBand3Cp.vue"); // 디바이스 band3 선택된 화면
const BandDeviceBand3ApplyCp = () =>
  import("@/components/band/device/BandDeviceBand3ApplyCp.vue"); // 디바이스 band3 선택완료 화면
const BandDeviceBand3InfoWCp = () =>
  import("@/components/band/device/BandDeviceBand3InfoWCp.vue"); // 디바이스 band3 INPUT 등록 화면
const BandDeviceBand3InfoHCp = () =>
  import("@/components/band/device/BandDeviceBand3InfoHCp.vue"); // 디바이스 band3 INPUT 등록 화면
const BandDeviceBandWaitCp = () =>
  import("@/components/band/device/BandDeviceBandWaitCp.vue"); // 디바이스 설정대기 화면
// 밴드

// 멤버쉽 카드
const MbershipView = () => import("@/views/mbership/MbershipView.vue");
// 멤버쉽 카드

// 알림
const AlarmView = () => import("@/views/alarm/AlarmView.vue");
// 알림

// 공지사항
const NoticeView = () => import("@/views/notice/NoticeView.vue");
const NoticeListCp = () => import("@/components/notice/NoticeListCp.vue");
const NoticeDetailCp = () => import("@/components/notice/NoticeDetailCp.vue");
// 공지사항

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
    children: [
      {
        path: "/health/main",
        name: "health-main",
        component: HealthMainCp,
      },
      {
        path: "/health/record",
        name: "health-record",
        component: HealthRecordCp,
      },
    ],
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
        path: "/band/sync",
        name: "band-sync",
        component: BandSyncCp,
      },
      {
        path: "/band/info",
        name: "band-info",
        component: BandInfoCp,
        children: [
          {
            path: "/band/info/main",
            name: "band-info-main",
            component: BnadInfoMainCp,
          },
          {
            path: "/band/info/alarm",
            name: "band-info-alarm",
            component: BandInfoAlarmCp,
          },
        ],
      },
      {
        path: "/band/setting",
        name: "band-setting",
        component: BandSettingCp,
      },
      {
        path: "/band/device",
        name: "band-device",
        component: BandDeviceCp,
        children: [
          {
            path: "/band/device/select",
            name: "band-device-select",
            component: BandDeviceSelectCp,
          },
          {
            path: "/band/device/band2",
            name: "band-device-band2",
            component: BandDeviceBand2Cp,
          },
          {
            path: "/band/device/band3",
            name: "band-device-band3",
            component: BandDeviceBand3Cp,
          },
          {
            path: "/band/device/band3/apply",
            name: "band-device-band3-apply",
            component: BandDeviceBand3ApplyCp,
          },
          {
            path: "/band/device/band3/infow",
            name: "band-device-band3-infow",
            component: BandDeviceBand3InfoWCp,
          },
          {
            path: "/band/device/band3/infoh",
            name: "band-device-band3-infoh",
            component: BandDeviceBand3InfoHCp,
          },
          {
            path: "/band/device/wait",
            name: "band-device-wait",
            component: BandDeviceBandWaitCp,
          },
        ],
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
    children: [
      {
        path: "/notice/list",
        name: "notice-list",
        component: NoticeListCp,
      },
      {
        path: "/notice/detail",
        name: "notice-detail",
        component: NoticeDetailCp,
      },
    ],
  },
  {
    path: "*",
    name: "none",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
