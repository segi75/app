<template>
  <div class="main_menu">
    <div class="title01">
      <p class="tit01">마이메뉴</p>
      <p class="tit02">즐겨찾기에서 메뉴를 설정하실 수 있습니다.</p>
    </div>
    <div class="swiper mySwiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="icon_menu">
            <div class="ic_menu">
              <div>
                <router-link :to="{ name: 'health-main' }">
                  <img src="/images/ic_main01.png" alt="건강관리"
                /></router-link>
              </div>
              <p>건강관리</p>
            </div>
            <div class="ic_menu">
              <div>
                <a href="#;"
                  ><img src="/images/ic_main02.png" alt="복지관일정"
                /></a>
              </div>
              <p>복지관일정</p>
            </div>
            <div class="ic_menu">
              <div>
                <a href="#;"
                  ><img src="/images/ic_main03.png" alt="수강신청"
                /></a>
              </div>
              <p>수강신청</p>
            </div>
            <div class="ic_menu">
              <div>
                <a href="#;"
                  ><img src="/images/ic_main04.png" alt="서비스예약"
                /></a>
              </div>
              <p>서비스예약</p>
            </div>
            <div class="ic_menu">
              <div>
                <a href="#;"
                  ><img src="/images/ic_main05.png" alt="식단정보"
                /></a>
              </div>
              <p>식단정보</p>
            </div>
            <div class="ic_menu">
              <div>
                <a href="#;"
                  ><img src="/images/ic_main06.png" alt="셔틀버스"
                /></a>
              </div>
              <p>셔틀버스</p>
            </div>
          </div>
        </div>
        <!--//swiper-slide-->

        <!-- 메뉴가 6개 초과일 경우(6개 이하일 경우 주석처리) -->
        <div class="swiper-slide">
          <div class="icon_menu">
            <div class="ic_menu">
              <div>
                <a href="#;"
                  ><img src="/images/ic_main04.png" alt="서비스예약"
                /></a>
              </div>
              <p>서비스예약</p>
            </div>
            <div class="ic_menu">
              <div>
                <a href="#;"><img src="/images/ic_main_none.png" alt="" /></a>
              </div>
              <p></p>
            </div>
            <div class="ic_menu">
              <div>
                <a href="#;"><img src="/images/ic_main_none.png" alt="" /></a>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <!--//swiper-slide-->
      </div>
      <!--//swiper-wrapper-->
      <div class="swiper-pagination"></div>
    </div>
    <!--//swiper mySwiper3-->
  </div>
  <!--//main_menu-->
</template>
<script>
export default {
  components: {},
};
</script>
