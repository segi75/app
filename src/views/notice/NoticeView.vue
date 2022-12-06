<template>
  <div>
    <!-- //CONTENT -->
    <router-view></router-view>
    <!-- //CONTENT -->
  </div>
</template>
<script>
export default {
  components: {},
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
