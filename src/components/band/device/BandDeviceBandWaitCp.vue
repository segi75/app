<template>
  <div>
    <div class="modal">
      <div class="modal_con02">
        <div class="txt02 center">
          <p>인바디밴드 설정이<br />완료되었습니다.</p>
        </div>
        <div class="btn02">
          <router-link :to="{ name: 'band-sync' }">
            <button class="on">확인</button></router-link
          >
        </div>
      </div>
    </div>
    <section class="sub_box">
      <div class="inbody">
        <div class="inbody_img">
          <img src="/images/inbody_band02_2.png" alt="" />
        </div>
        <div class="sub_box_txt02 modal_btn">인바디밴드 설정 중입니다.</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    // * POPUP - 인바디밴드 */
    $(".modal_btn").bind("click", function () {
      $(".modal").stop().show();
    });
    $(".modal_close").bind("click", function () {
      $(".modal").stop().hide();
    });
  },
  unmounted() {},
  methods: {},
};
</script>
