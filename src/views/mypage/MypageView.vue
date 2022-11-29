<template>
  <div>
    <!-- //Content -->
    <MypageMainCp />
    <!-- //Content -->
  </div>
</template>

<script>
import MypageMainCp from "@/components/mypage/MypageMainCp.vue";

export default {
  components: { MypageMainCp },
  mounted() {
    //==공통 화면설정=================================================

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
<style scoped></style>
