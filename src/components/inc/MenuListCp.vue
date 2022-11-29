<template>
  <div class="m_menu_wrap">
    <div class="top">
      <router-link to="/">
        <img src="/images/ic_home.png" alt="홈"
      /></router-link>
      <router-link to="/mypage"
        ><img src="/images/ic_setting.png" alt="설정"
      /></router-link>
    </div>
    <div class="m_menu_close">
      <img src="/images/ic_exit.png" alt="닫기" />
    </div>
    <div class="m_menu_pro">
      <p>안녕하세요,</p>
      <a href="../sub/mypage/mypage.html">
        <span class="name">홍길동</span><span>님</span
        ><img src="/images/ic_arw_r02.png" alt="" />
      </a>
    </div>
    <div class="log">
      <p class="time">최근 접속 <span>2022.11.08 09:47</span></p>
      <router-link to="/login">
        <span class="logout">로그아웃</span>
      </router-link>
    </div>

    <section class="sub_box m_menu">
      <div class="menu_search">
        <a
          href="#;"
          onclick="window.open('../inc/menu_search.html','_self','scrollbars=yes,resizable=no, left=0,top=0');return false"
        >
          <p>메뉴 검색</p>
          <img src="/images/ic_search.png" alt="메뉴 검색" />
        </a>
      </div>

      <ul class="m_menu_con">
        <li class="m_menu01">
          <a href="#;">
            <p class="tit01">복지관 행사 신청 및 접수</p>
            <p class="tit02">기관별 행사 신청 및 접수</p>
          </a>
          <ul>
            <li class="m_menu01 m_menu02">
              <a href="#;">복지관 행사 신청</a>
              <ul>
                <li><a href="#;">- 진행 중인 행사</a></li>
                <li><a href="#;">- 행사 신청</a></li>
              </ul>
            </li>
            <li class="m_menu01 m_menu02">
              <a href="#;">복지관 행사 접수</a>
            </li>
          </ul>
        </li>

        <li class="m_menu01">
          <a href="#;">
            <p class="tit01">온라인 수강신청 및 추첨결과</p>
            <p class="tit02">수강신천 및 결제, 추첨결좌 조회</p>
          </a>
          <ul>
            <li class="m_menu01 m_menu02">
              <a href="#;">온라인 수강신청</a>
              <ul>
                <li><a href="#;">- 수강신청</a></li>
                <li><a href="#;">- 수강결제</a></li>
              </ul>
            </li>
            <li class="m_menu01 m_menu02"><a href="#;">추첨결과 조회</a></li>
          </ul>
        </li>

        <li class="m_menu01">
          <a href="#;">
            <p class="tit01">건강관리</p>
            <p class="tit02">인바디 측정, 실시간 건강 관리</p>
          </a>
          <ul>
            <li class="m_menu01 m_menu02">
              <a href="#;">인바디 측정</a>
            </li>
            <li class="m_menu01 m_menu02">
              <a href="#;">실시간 건강 관리</a>
            </li>
          </ul>
        </li>

        <li class="m_menu01">
          <a href="#;">
            <p class="tit01">소식 및 알림</p>
            <p class="tit02">기관별 소식 및 알림</p>
          </a>
          <ul>
            <li class="m_menu01 m_menu02">
              <a href="#;">기관별 소식</a>
            </li>
            <li class="m_menu01 m_menu02">
              <a href="#;">기관별 알림</a>
            </li>
          </ul>
        </li>

        <li class="m_menu01">
          <a href="#;">
            <p class="tit01">이용안내</p>
            <p class="tit02">복지통 이용안내</p>
          </a>
        </li>
      </ul>
    </section>
    <!--//MENU-->
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    /* M_MENU */
    $(".m_menu li.active").addClass("open").children("ul").show();
    $(".m_menu li.m_menu01 > a").on("click", function () {
      $(this).removeAttr("href");
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(200);
      } else {
        element.addClass("open");
        element.children("ul").slideDown(200);
        element.siblings("li").children("ul").slideUp(200);
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(200);
      }
    });
  },
};
</script>
