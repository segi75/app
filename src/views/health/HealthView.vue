<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},

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
