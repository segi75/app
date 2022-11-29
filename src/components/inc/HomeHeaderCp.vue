<template>
  <div>
    <header>
      <div class="top">
        <router-link to="/"
          ><img src="/images/logo_s.png" alt="logo"
        /></router-link>
        <a href="#;" class="m_menu_btn"
          ><img src="/images/ic_menu.png" alt="menu"
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
  </div>
</template>
<script>
import MenuListCp from "@/components/inc/MenuListCp.vue";
export default {
  components: { MenuListCp },
  mounted() {
    // 우측메뉴 열고 닫기
    $(".m_menu_btn").bind("click", function () {
      $(".m_menu_wrap").fadeIn(300);
    });
    $(".m_menu_close").bind("click", function () {
      $(".m_menu_wrap").fadeOut(300);
    });
  },
};
</script>
