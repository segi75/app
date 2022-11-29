<template>
  <div>
    <section class="inbody_band">
      <div class="band_info">
        <router-link :to="{ name: 'band-device' }">
          <div class="band_tit02">
            <p>등록된 기기 없음</p>
            <span>인바디 기기를 등록해 주세요.</span>
          </div>
          <img class="arw" src="/images/ic_arw_r05.png" alt="" />
        </router-link>
      </div>
    </section>

    <section class="sub_box">
      <div class="inbody">
        <p class="sub_box_tit">기본설정</p>
        <div class="inbody_alarm">
          <a href="#;">
            <p class="tit">기능 설정</p>
            <div class="txt">
              <span>인바디 / 운동 / 식사</span>
              <img class="arw" src="/images/ic_arw_r06.png" alt="" />
            </div>
          </a>
        </div>

        <div class="inbody_alarm">
          <a href="#;">
            <p class="tit">목표 설정</p>
            <div class="txt">
              <span>운동 / 식사</span>
              <img src="/images/ic_arw_r06.png" alt="" />
            </div>
          </a>
        </div>
      </div>

      <div class="inbody">
        <p class="sub_box_tit">데이터 관리</p>
        <div class="inbody_alarm">
          <a href="#;">
            <p class="tit">인바디 결과 관리</p>
            <div class="txt">
              <img src="/images/ic_arw_r06.png" alt="" />
            </div>
          </a>
        </div>

        <div class="inbody_alarm">
          <a href="#;">
            <p class="tit">식사 사진 관리</p>
            <div class="txt">
              <img src="/images/ic_arw_r06.png" alt="" />
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
};
</script>
