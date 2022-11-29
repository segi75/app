<template>
  <div>
    <header>
      <div class="top">
        <router-link to="/">
          <img src="images/ic_top_prev.png" alt="이전" />
        </router-link>
        <p class="txt">건강관리</p>
        <a href="#;" class="m_menu_btn"
          ><img src="images/ic_menu.png" alt="메뉴"
        /></a>
      </div>
    </header>

    <!--//MENU-->
    <MenuListCp />
    <!--//MENU-->

    <!-- //Content -->
    <HealthMainCp />
    <!-- //Content -->
  </div>
</template>

<script>
import MenuListCp from "@/components/inc/MenuListCp.vue";
import HealthMainCp from "@/components/health/HealthMainCp.vue";

export default {
  components: { MenuListCp, HealthMainCp },

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
<style scoped></style>
