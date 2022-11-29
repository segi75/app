<template>
  <div>
    <!-- //Content -->
    <HealthMainCp />
    <!-- //Content -->
  </div>
</template>

<script>
import HealthMainCp from "@/components/health/HealthMainCp.vue";

export default {
  components: { HealthMainCp },

  mounted() {
    //== HOME / SUB 공통 요소 화면설정 ==============================

    // 페이지 url로 top, bottom 설정
    this.$parent.f_urlCheck();
    this.$parent.f_urlCheckTitleName();
    // body css class changes
    document.body.classList.add("sub_con");

    //================================================================
  },
};
</script>
<style scoped></style>
