<template>
  <div>
    <section>
      <div class="qrcode">
        <p class="txt01">QR코드</p>
        <img src="images/qrcode.png" alt="qrcode" />
        <p class="txt02">회원번호</p>
        <p class="txt03">MCARD+2233+2010-00015</p>
      </div>
    </section>

    <section class="sub_box sub_box02">
      <div class="membership">
        <div class="member_card">
          <div class="swiper mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide on">
                <span class="active">사용중</span>
                <p class="name">엔컴복지관</p>
                <p class="mem_num">
                  <span class="txt01">회원번호</span
                  ><span class="txt02">MCARD+2233+2010-00015</span>
                </p>
                <button class="on_btn">
                  <img src="images/ic_check.png" alt="" />기본 기관카드로
                  설정되어 있습니다.
                </button>
              </div>
              <div class="swiper-slide">
                <p class="name">부산복지관</p>
                <p class="mem_num">
                  <span class="txt01">회원번호</span
                  ><span class="txt02">MCARD+1155+2020-00119</span>
                </p>
                <button class="off_btn">기본 기관카드로 설정</button>
              </div>
            </div>
          </div>
          <div class="swiper_btn">
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
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
    // 가입기관 스크롤
    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  unmounted() {},
  methods: {},
};
</script>
