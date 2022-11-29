<template>
  <div>
    <section class="inbody_band">
      <div class="band_info">
        <a href="inbody_band.html">
          <div class="band_img">
            <img src="images/inbody_band.png" alt="인바디밴드" />
          </div>
          <div class="band_tit">
            <span>등록된 기기</span>
            <p>인바디밴드3</p>
          </div>
          <img class="arw" src="images/ic_arw_r05.png" alt="" />
        </a>
      </div>
      <button class="btn_style02">
        <img src="images/ic_re.png" alt="동기화" /> 밴드 기록 동기화
      </button>
    </section>

    <section class="sub_box">
      <div class="inbody">
        <div class="inbody_list">
          <div class="inbody_txt">
            <div class="name">
              <img src="images/ic_inbody01.png" alt="" />
              <p class="tit">걸음수</p>
            </div>
            <div class="count">
              <p class="count_txt">
                <span class="value">6,750</span>
                <span class="max">/ 10,000보</span>
              </p>
            </div>
          </div>
          <div class="graph"><img src="images/inbody01.png" alt="" /></div>
        </div>

        <div class="inbody_list">
          <div class="inbody_txt">
            <div class="name">
              <img src="images/ic_inbody02.png" alt="" />
              <p class="tit">심박수</p>
            </div>
            <div class="count">
              <p class="count_txt">
                <span class="value">73</span><span class="unit02">bpm</span>
              </p>
              <p class="count_txt02">
                최대 <span>98</span> / 최소 <span>69</span>
              </p>
            </div>
          </div>
        </div>

        <div class="inbody_list">
          <div class="inbody_txt">
            <div class="name">
              <img src="images/ic_inbody03.png" alt="" />
              <p class="tit">수면</p>
            </div>
            <div class="count">
              <p class="count_txt">
                <span class="value">6</span><span class="unit">시간</span>
                <span class="value">38</span><span class="unit">분</span>
              </p>
            </div>
          </div>
        </div>

        <div class="inbody_list">
          <div class="inbody_txt">
            <div class="name">
              <img src="images/ic_inbody04.png" alt="" />
              <p class="tit">운동</p>
            </div>
            <div class="count">
              <p class="count_txt">
                <span class="value">25</span><span class="unit">분</span>
              </p>
              <p class="count_txt02">걷기</p>
            </div>
          </div>
        </div>

        <div class="inbody_list">
          <div class="inbody_txt">
            <div class="name">
              <img src="images/ic_inbody05.png" alt="" />
              <p class="tit">식사기록</p>
            </div>
            <div class="count">
              <p class="count_txt">
                <span class="value">2,350</span>
                <span class="max">/ 2,400kcal</span>
              </p>
            </div>
          </div>
          <div class="graph"><img src="images/inbody02.png" alt="" /></div>
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
