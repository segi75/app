<template>
  <div>
    <header>
      <div class="top">
        <router-link to="/"
          ><img src="images/ic_top_prev.png" alt="이전"
        /></router-link>
        <p class="txt">인바디밴드</p>
        <a href="#;" class="m_menu_btn"
          ><img src="images/ic_menu.png" alt="메뉴"
        /></a>
      </div>
    </header>

    <!--//MENU-->
    <MenuListCp />
    <!--//MENU-->

    <!-- //Content -->
    <BandMainCp />
    <!-- //Content -->
  </div>
</template>
<script>
import MenuListCp from "@/components/inc/MenuListCp.vue";
import BandMainCp from "@/components/band/BandMainCp.vue";

export default {
  components: { MenuListCp, BandMainCp },
  mounted() {
    //== HOME / SUB 공통 요소 화면설정 ==============================

    // 페이지 url로 top, bottom 설정
    this.$parent.f_urlCheck();
    // body css class changes
    document.body.classList.add("sub_con");

    // 우측메뉴 열고 닫기
    $(".m_menu_btn").bind("click", function () {
      $(".m_menu_wrap").fadeIn(300);
    });
    $(".m_menu_close").bind("click", function () {
      $(".m_menu_wrap").fadeOut(300);
    });

    //================================================================
  },
};
</script>
