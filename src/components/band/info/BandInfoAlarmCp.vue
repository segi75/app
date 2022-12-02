<template>
  <div>
    <div class="step_modal modal">
      <div class="modal_con">
        <div class="step_con">
          <div class="step_count">
            <span>9000</span>
            <span class="on">10000</span>
            <span>11000</span>
          </div>
          <span class="step_txt">보</span>
        </div>
        <div class="modal_close">확 인</div>
      </div>
    </div>
    <section class="sub_box">
      <div class="inbody">
        <p class="sub_box_txt">
          1일 보행 목표 달성 시<br />인바디밴드에서 알람이 울립니다.
        </p>
        <div class="inbody_alarm inbody_alarm02">
          <p class="tit">목표 달성 알림</p>
          <div class="switch">
            <input type="checkbox" id="switch" />
            <label for="switch" class="switch_label">
              <span class="onf_btn"></span>
            </label>
          </div>
        </div>
        <div class="inbody_alarm">
          <a href="#;" class="modal_btn">
            <p class="tit">목표 걸음수</p>
            <div class="step">
              <p>10,000</p>
              <img src="/images/ic_arw_r07.png" alt="" />
            </div>
          </a>
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
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
