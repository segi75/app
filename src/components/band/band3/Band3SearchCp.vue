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
          <button class="on" @click="$router.push({ name: 'band-info' })">
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
          <p class="txt01">인바디밴드3</p>
          <p class="txt02">등록을 시작합니다.</p>
          <p class="txt03">기기의 전원이 켜져있는지 꼭 확인해 주세요.</p>
          <button
            class="btn_style02"
            onClick="location.href='inbody_band02_3.html'"
          >
            기기 검색
          </button>
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
    /* POPUP - 인바디밴드 */
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
