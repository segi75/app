<template>
  <div>
    <div class="modal">
      <div class="modal_con02">
        <div class="txt">
          <p>기기와 연결을 끊을까요?</p>
          <span
            >기기의 연결을 끊더라도, 기기에 저장된<br />검사결과는 지워지지
            않습니다.</span
          >
        </div>
        <div class="btn">
          <button class="off modal_close">취소</button>
          <button class="on modal_close">끊기</button>
        </div>
      </div>
    </div>

    <section class="inbody_band">
      <div class="band_pro">
        <div class="band_img">
          <img src="/images/inbody_band02.png" alt="인바디밴드" />
        </div>
        <div class="band_tit">
          <p>인바디밴드3</p>
          <span>(SN:0321015532)</span>
        </div>
      </div>
    </section>

    <section class="sub_box">
      <div class="inbody">
        <p class="sub_box_tit">알림</p>
        <div class="inbody_alarm">
          <router-link :to="{ name: 'band-info-alarm' }">
            <p class="tit">목표알림</p>
            <div class="txt">
              <span>10,000보 / 켬</span>
              <img src="/images/ic_arw_r06.png" alt="" />
            </div>
          </router-link>
        </div>

        <div class="inbody_alarm">
          <a href="inbody_band_alarm.html">
            <p class="tit">움직이기</p>
            <div class="txt">
              <span>켬</span>
              <img src="/images/ic_arw_r06.png" alt="" />
            </div>
          </a>
        </div>

        <div class="inbody_alarm">
          <a href="inbody_band_alarm.html">
            <p class="tit">시간알림</p>
            <div class="txt">
              <span></span>
              <img src="/images/ic_arw_r06.png" alt="" />
            </div>
          </a>
        </div>

        <div class="inbody_alarm">
          <a href="inbody_band_alarm.html">
            <p class="tit">착용알림</p>
            <div class="txt">
              <span>켬</span>
              <img src="/images/ic_arw_r06.png" alt="" />
            </div>
          </a>
        </div>
        <button class="band_del modal_btn">기기삭제</button>
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
