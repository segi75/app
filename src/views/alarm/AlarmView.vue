<template>
  <div>
    <header>
      <div class="top">
        <a href="#;" onClick="history.back()"
          ><img src="images/ic_top_prev.png" alt="이전"
        /></a>
        <p class="txt">알림</p>
        <a href="#;" class="m_menu_btn"
          ><img src="images/ic_menu.png" alt="메뉴"
        /></a>
      </div>
    </header>

    <!--//MENU-->
    <MenuListCp />
    <!--//MENU-->

    <!-- //Content -->
    <AlarmMainCp />
    <!-- //Content -->
  </div>
</template>
<script>
import MenuListCp from "@/components/inc/MenuListCp.vue";
import AlarmMainCp from "@/components/alarm/AlarmMainCp.vue";
export default {
  components: { MenuListCp, AlarmMainCp },
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
