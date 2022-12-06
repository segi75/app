<template>
  <div>
    <div class="modal">
      <div class="modal_con02">
        <div class="txt center">
          <p>InBodyBAND3</p>
          <span>이 기기를 등록하시겠습니까?</span>
        </div>
        <div class="btn">
          <button class="off modal_close">취소</button>

          <button
            class="on"
            @click="$router.push({ name: 'band-device-band3-infow' })"
          >
            등록
          </button>
        </div>
      </div>
    </div>
    <section class="sub_box">
      <div class="inbody">
        <div class="inbody_img">
          <img src="/images/inbody_band02_2.png" alt="" />
        </div>
        <div class="inbody_search">
          <p class="txt04">기기 화면에 아래의 4글자 코드가 보여집니다.</p>
          <div class="inbody_btn modal_btn">
            <span class="left">5532</span>
            <span class="right">InBodyBAND3</span>
          </div>
        </div>
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
