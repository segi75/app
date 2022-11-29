<template>
  <div id="app">
    <!-- //HEADER -->
    <SubHeaderCp v-if="divUrl === 1" :title="menuName" />
    <!-- fade 애니메이션 -->
    <transition name="slide-fade" mode="out-in">
      <!-- 라우터 호출 View 출력 -->
      <router-view></router-view>
      <!-- 하단 바로가기 버튼 -->
    </transition>
    <!-- fade 애니메이션 -->
    <FooterCp v-if="divUrl !== 2" />
  </div>
</template>
<script>
import SubHeaderCp from "./components/inc/SubHeaderCp.vue";
import FooterCp from "@/components/inc/FooterCp.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: { SubHeaderCp, FooterCp },
  data() {
    return {
      divUrl: 0,
      menuName: "홈",
    };
  },
  methods: {
    // 로그인 페이지 하단 바 숨기기
    f_urlCheck() {
      let router = this.$route;
      const url = router.fullPath;
      // divUrl 0: home , 1: sub , 2 none
      if (url == "/" || url == "/#;") {
        this.divUrl = 0;
      } else {
        this.divUrl = 1;
        if (url.indexOf("/login") > -1 || url.indexOf("/healthRecord") > -1) {
          this.divUrl = 2;
        }
      }
    },
    // 서브메뉴 타이틀 설정
    f_urlCheckTitleName() {
      let router = this.$route;
      let url = router.fullPath;
      console.log("url:", url);
      if (url == "/health") {
        this.menuName = "건강관리";
      } else if (url == "/mypage") {
        this.menuName = "마이페이지";
      } else if (url == "/band") {
        this.menuName = "인바디밴드";
      } else if (url == "/band-setting") {
        this.menuName = "인바디밴드";
      } else if (url == "/mbership") {
        this.menuName = "모바일 회원카드";
      } else if (url == "/alram") {
        this.menuName = "알림";
      } else if (url == "/notice") {
        this.menuName = "공지사항";
      }
    },
  },
  mounted() {
    // page 기능
    this.f_urlCheck();
    this.f_urlCheckTitleName();

    /* Mypage Info Menu */
    $(".my_etc_info .title").bind("click", function () {
      $(this).stop().toggleClass("on");
      $(this).next(".info_txt").stop().slideToggle(300);
    });

    /* POPUP - 공통 */
    $(".popup").bind("click", function () {
      $(".popup_bg").addClass("on");
      $("html, body").css({
        "overflow-y": "hidden",
      });
    });

    /* POPUP - 기본정보변경 */
    $(".mypopup01").bind("click", function () {
      $(".mypopup01_con").addClass("on");
    });
    $(".popup_exit, .pop_btn01 > .exit").bind("click", function () {
      $(".popup_bg").removeClass("on");
      $(".popup_con").removeClass("on");
      $("html, body").css({
        "overflow-y": "auto",
      });
    });
    $(".popup_exit02, .pop_btn02 > .cancel").bind("click", function () {
      $(".mypopup02_con").removeClass("on");
      $(".mypopup01_con").addClass("on");
    });

    /* POPUP - 전화번호변경 */
    $(".mypopup02").bind("click", function () {
      $(".mypopup02_con").addClass("on");
      $(".mypopup01_con").removeClass("on");
    });
    $(".pop_number").bind("click", function () {
      $(".num_btn").addClass("on");
      $(".num_time").stop().show();
      $(".num_txt").stop().show();
    });

    /* POPUP - 전화번호 변경완료 */
    $(".pop_btn02 > .save").bind("click", function () {
      $(".mypopup03_con").addClass("on");
      $(".mypopup02_con").removeClass("on");
    });
    $(
      ".popup_exit03, .pop_btn03 > .exit, .pop_btn02 > .cancel, .popup_exit02"
    ).bind("click", function () {
      $(".mypopup03_con, .mypopup02_con").removeClass("on");
      $(".mypopup01_con").addClass("on");
      $(".num_btn").removeClass("on");
      $(".num_time").stop().hide();
      $(".num_txt").stop().hide();
    });

    /* POPUP - 인바디밴드 */
    // $(".modal_btn").bind("click", function () {
    //   $(".modal").stop().show();
    // });
    // $(".modal_close").bind("click", function () {
    //   $(".modal").stop().hide();
    // });

    $(".modal02_btn").bind("click", function () {
      $(".modal02").stop().show();
    });
    $(".modal02_close").bind("click", function () {
      $(".modal02").stop().hide();
    });

    $(".modal03_btn").bind("click", function () {
      $(".modal03").stop().show();
    });
    $(".modal03_close").bind("click", function () {
      $(".modal03").stop().hide();
    });

    $(".modal04_btn").bind("click", function () {
      $(".modal04").stop().show();
    });
    $(".modal04_close").bind("click", function () {
      $(".modal04").stop().hide();
    });

    $(".modal05_btn").bind("click", function () {
      $(".modal05").stop().show();
    });
    $(".modal05_close").bind("click", function () {
      $(".modal05").stop().hide();
    });
  },
};
</script>

<style scoped>
/*** TRANSITIONS (애니메에션)***/
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}

.slide-up-move {
  transition: transform 0.8s ease-in;
}
</style>
