<template>
  <div>
    <div class="modal">
      <div class="modal_con02">
        <div class="txt03 center">
          <p>인바디밴드에 저장할<br />체중을 입력해주세요.</p>
          <div class="modal_body_input">
            <input type="text" placeholder="65.8" /><span>kg</span>
          </div>
        </div>
        <div class="btn02">
          <button class="on modal_close modal02_btn">확인</button>
        </div>
      </div>
    </div>

    <div class="modal02">
      <div class="modal_con02">
        <div class="txt02 center">
          <p>원활한 설정을 위해<br />인바디밴드2 전원이 켜져 있어야 합니다.</p>
        </div>
        <div class="btn02">
          <router-link :to="{ name: 'band-device-wait' }">
            <button class="on modal02_close modal03_btn">확인</button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- <div class="modal03">
      <div class="modal_con02">
        <div class="txt02 center">
          <p>인바디밴드 설정이<br />완료되었습니다.</p>
        </div>
        <div class="btn02">
          <router-link :to="{ name: 'band-device-wait' }">
            <button class="on">확인</button>
          </router-link>
        </div>
      </div>
    </div> -->

    <section class="sub_box">
      <div class="inbody">
        <div class="inbody_img">
          <img src="/images/inbody_band02_2.png" alt="" />
        </div>
        <div class="sub_box_txt sub_box_txt03">
          설정 버튼을 누르세요.<br />
          인바디밴드가 방전된 경우에는 설정할 수 없습니다.<br />
          화면이 켜지지 않는 경우 먼저 충전하세요.
        </div>
        <button class="btn_style05 modal_btn">설정</button>
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

    $(".modal02_btn").bind("click", function () {
      $(".modal02").stop().show();
    });
    $(".modal02_close").bind("click", function () {
      $(".modal02").stop().hide();
    });
  },
  unmounted() {},
  methods: {},
};
</script>
