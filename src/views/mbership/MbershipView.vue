<template>
  <div>
    <header>
      <div class="top">
        <router-link to="/">
          <img src="images/ic_top_prev.png" alt="이전" />
        </router-link>
        <p class="txt">모바일 회원카드</p>
        <a href="#;" class="m_menu_btn"
          ><img src="images/ic_menu.png" alt="menu"
        /></a>
      </div>
    </header>

    <!--//MENU-->
    <MenuListCp />
    <!--//MENU-->

    <!-- //Content -->
    <MberShipMainCp />
    <!-- //Content -->
  </div>
</template>
<script>
import MenuListCp from "@/components/inc/MenuListCp.vue";
import MberShipMainCp from "@/components/membership/MberShipMainCp.vue";
export default {
  components: { MenuListCp, MberShipMainCp },
  mounted() {
    // body css class changes
    document.body.classList.add("sub_con");

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
