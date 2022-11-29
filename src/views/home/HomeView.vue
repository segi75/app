<template>
  <div>
    <header>
      <div class="top">
        <router-link to="/"
          ><img src="images/logo_s.png" alt="logo"
        /></router-link>
        <a href="#;" class="m_menu_btn"
          ><img src="images/ic_menu.png" alt="menu"
        /></a>
      </div>
      <p class="top_tit">
        반갑습니다.
        <br />무엇을 도와드릴까요?
      </p>
    </header>

    <!--//MENU-->
    <MenuListCp />
    <!--//MENU-->

    <section class="main_con">
      <!-- 마이메뉴 -->
      <MymenuIconCp />
      <!-- 복지통소식 -->
      <NoticeListCp />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuListCp from "@/components/inc/MenuListCp.vue";
import MymenuIconCp from "@/components/home/MymenuIconCp.vue";
import NoticeListCp from "@/components/home/NoticeListCp.vue";

export default {
  name: "HomeView",
  components: { MenuListCp, MymenuIconCp, NoticeListCp },
  mounted() {
    // body css class changes: remove
    document.body.classList.remove("sub_con");

    // 우측메뉴 열고 닫기
    $(".m_menu_btn").bind("click", function () {
      $(".m_menu_wrap").fadeIn(300);
    });
    $(".m_menu_close").bind("click", function () {
      $(".m_menu_wrap").fadeOut(300);
    });

    // 하단 바로가기 login페이지에서 제거
    this.$parent.f_loginPageCheck();

    // my메뉴
    const swiper3 = new Swiper(".mySwiper3", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // 복지통소식
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>
