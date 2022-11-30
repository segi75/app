<template>
  <div>
    <!-- //Content -->
    <router-view></router-view>
    <!-- //Content -->
  </div>
</template>
<script>
import MenuListCp from "@/components/inc/MenuListCp.vue";

export default {
  components: { MenuListCp },
  mounted() {
    //== HOME / SUB 공통 요소 화면설정 ==============================

    // 페이지 url로 top, bottom 설정
    this.$parent.f_urlCheck();
    // body css class changes
    document.body.classList.add("sub_con");
    // header title changes
    this.$parent.f_urlCheckTitleName();
    //================================================================
  },
};
</script>
