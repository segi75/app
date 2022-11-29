<template>
  <div>
    <header>
      <div class="top">
        <router-link to="/">
          <img src="images/ic_top_prev.png" alt="이전"
        /></router-link>
        <p class="txt">{{ title }}</p>
        <a href="#;" class="m_menu_btn"
          ><img src="images/ic_menu.png" alt="menu"
        /></a>
      </div>
    </header>
    <!--//MENU-->
    <MenuListCp />
    <!--//MENU-->
  </div>
</template>
<script>
import MenuListCp from "@/components/inc/MenuListCp.vue";
export default {
  name: "SubHeaderCp",
  props: {
    title: { String, default: "SUB PAGE" },
  },
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
  methods: {},
};
</script>
