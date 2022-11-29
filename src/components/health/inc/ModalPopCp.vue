<template>
  <div class="modal modal_pop">
    <div class="modal_con03">
      <div class="txt01">
        <p>인바디점수</p>
        <div class="close modal_close">
          <img src="images/ic_exit02.png" alt="닫기" />
        </div>
      </div>
      <div class="con">
        <img src="images/health_pop.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},

  mounted() {
    $(".modal_btn").bind("click", function () {
      $(".modal").stop().show();
    });
    $(".modal_close").bind("click", function () {
      $(".modal").stop().hide();
    });
  },
};
</script>
