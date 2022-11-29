<template>
  <div>
    <!-- //CONTENT -->
    <NoticeMainCp />
    <!-- //CONTENT -->
  </div>
</template>
<script>
import NoticeMainCp from "@/components/notice/NoticeMainCp.vue";
export default {
  components: { NoticeMainCp },
  mounted() {
    //== HOME / SUB 공통 요소 화면설정 ==============================

    this.$parent.f_urlCheck();
    // body css class changes
    document.body.classList.add("sub_con");
    // header title changes
    this.$parent.f_urlCheckTitleName();

    //================================================================
  },
};
</script>
