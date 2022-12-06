<template>
  <div class="notice">
    <div class="title01 title02">
      <p class="tit01">복지통 소식을 전해드려요</p>
      <p class="more_btn">
        <router-link :to="{ name: 'notice-list' }">
          더보기<img src="/images/ic_arw_r01.png" alt=""
        /></router-link>
      </p>
    </div>
    <div class="notice_slide">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link :to="{ name: 'notice-detail' }">
              <div class="slide_con">
                <p class="tit"><span class="badge">공지</span>엔컴복지관</p>
                <p class="txt">
                  제2기 종합사회복지관교육 · 문화프로그램 수강생을 모집합니다.
                </p>
                <p class="date">2022-10-19</p>
              </div>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link :to="{ name: 'notice-detail' }">
              <div class="slide_con">
                <p class="tit"><span class="badge">공지</span>엔컴복지관2</p>
                <p class="txt">
                  제3기 종합사회복지관교육 · 문화프로그램 수강생을 모집합니다.
                </p>
                <p class="date">2022-10-19</p>
              </div>
            </router-link>
          </div>
          <div class="swiper-slide">
            <a href="../sub/notice/notice_view.html">
              <div class="slide_con">
                <p class="tit"><span class="badge">공지</span>엔컴복지관3</p>
                <p class="txt">
                  제4기 종합사회복지관교육 · 문화프로그램 수강생을 모집합니다.
                </p>
                <p class="date">2022-10-19</p>
              </div>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--//notice_slide-->
  </div>
  <!--//notice-->
</template>
<script>
export default {
  components: {},
};
</script>
