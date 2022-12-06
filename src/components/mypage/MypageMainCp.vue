<template>
  <div>
    <section>
      <div class="popup_bg"></div>
      <!-- POPUP BG -->

      <div class="popup_con mypopup01_con">
        <div class="top">
          <p>기본정보변경</p>
          <img class="popup_exit" src="/images/ic_exit.png" alt="close" />
        </div>
        <div class="con">
          <div class="txt">
            <p class="tit">휴대폰</p>
            <div class="phone">
              <span>010</span>
              <span>1234</span>
              <span>5678</span>
              <button class="btn_style04 mypopup02">변경</button>
            </div>
          </div>
          <div class="txt">
            <p class="tit">이메일</p>
            <div class="email">
              <p>gildong@ncom.com</p>
            </div>
          </div>
          <div class="txt">
            <p class="tit">자택주소</p>
            <div class="add">
              <div class="add01">
                <span>12345</span
                ><a href="#;"
                  ><img src="/images/ic_search02.png" alt="검색"
                /></a>
              </div>
              <div class="add02">
                <span>서울시 강남구 봉은사로 25길 12</span>
              </div>
              <textarea placeholder="상세주소 입력" class="add03"></textarea>
            </div>
          </div>
        </div>
        <div class="pop_btn pop_btn01">
          <div class="cancel exit">취소</div>
          <div class="save exit">변경</div>
        </div>
      </div>
      <!-- MYPOPUP01 기본정보 변경 -->

      <div class="popup_con mypopup02_con">
        <div class="top">
          <p>전화번호변경</p>
          <img class="popup_exit02" src="/images/ic_exit.png" alt="close" />
        </div>
        <div class="con">
          <p class="user_num">
            <span class="txt01">회원 전화번호</span>
            <span class="txt02">010 - 1234 - 5678</span>
          </p>
          <div class="txt">
            <input
              class="num01"
              type="text"
              placeholder="변경할 전화번호 입력"
            />
            <button class="num_btn btn_style04 pop_number">인증</button>
          </div>
          <div class="txt">
            <input class="num02" type="text" placeholder="인증번호 입력" />
            <span class="num_time">02:59</span>
          </div>
          <div class="num_txt">인증번호가 발송되었습니다.</div>
        </div>
        <div class="pop_btn pop_btn02">
          <div class="cancel exit">취소</div>
          <div class="save exit">변경</div>
        </div>
      </div>
      <!-- MYPOPUP02 전화번호 변경(+인증) -->

      <div class="popup_con mypopup03_con">
        <div class="top">
          <p>전화번호변경</p>
          <img class="popup_exit03" src="/images/ic_exit.png" alt="close" />
        </div>
        <div class="con">
          <p class="save_num">
            <span class="txt01">변경된 전화번호</span>
            <span class="txt02">010 - 1234 - 5678</span>
          </p>
        </div>
        <div class="pop_btn pop_btn03">
          <div class="save exit">확인</div>
        </div>
      </div>
      <!-- MYPOPUP02 전화번호 변경완료 -->

      <div class="mypage">
        <div class="name">
          <div class="pro"><img src="/images/profile.png" alt="" /></div>
          <p>홍길동</p>
        </div>
        <div class="my_info">
          <ul class="info_l">
            <li>주민등록번호</li>
            <li>연락처</li>
            <li>이메일</li>
          </ul>
          <ul class="info_r">
            <li class="id_number"><span>581010</span>-******</li>
            <li class="number">010-1234-5678</li>
            <li class="email">gildong@ncom.com</li>
          </ul>
        </div>
        <button class="btn_style02 popup mypopup01">기본정보 변경</button>
      </div>
    </section>

    <section class="sub_box">
      <div class="my_etc_info">
        <div class="etc_info">
          <div class="title on">
            <p>추가정보</p>
            <img src="/images/ic_arw_d01.png" alt="" />
          </div>
          <div class="info_txt">
            <div class="txt_box">
              <ul class="info_l">
                <li>코로나 백신</li>
                <li>혼인여부</li>
                <li>기초연금수령</li>
                <li>장애여부</li>
              </ul>
              <ul class="info_r">
                <li>4차 접종 완료 / 화이자</li>
                <li>배우자 있음</li>
                <li>수령 안함</li>
                <li>없음</li>
              </ul>
            </div>
            <button class="btn_style03 popup mypopup01">변경하기</button>
          </div>
        </div>
        <!--추가정보-->

        <div class="etc_info">
          <div class="title on">
            <p>나의 회원증</p>
            <img src="/images/ic_arw_d01.png" alt="" />
          </div>
          <div class="info_txt">
            <div class="id_card">
              <div class="on">
                <router-link :to="{ name: 'mbership' }">
                  <p class="name">엔컴복지관</p>
                  <span class="ing">사용중</span>
                  <div class="number">
                    <span class="t01">회원번호</span>
                    <span class="t02">MCARD+2233+2010-00015</span>
                  </div>
                </router-link>
              </div>
              <div class="off">
                <router-link :to="{ name: 'mbership' }">
                  <p class="name">부산복지관</p>
                  <div class="number">
                    <span class="t01">회원번호</span>
                    <span class="t02">BSEGZ+1155+2020-00119</span>
                  </div>
                </router-link>
              </div>
              <div class="off">
                <router-link :to="{ name: 'mbership' }">
                  <p class="name">사랑복지관</p>
                  <div class="number">
                    <span class="t01">회원번호</span>
                    <span class="t02">SRGYW+1097+2015-00072</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!--나의 회원증-->

        <div class="etc_info">
          <div class="title">
            <p>나의 신청내역</p>
            <img src="/images/ic_arw_d01.png" alt="" />
          </div>
          <div class="info_txt" style="display: none"></div>
        </div>
        <!--나의 신청내역-->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    /* Mypage Info Menu */
    $(".my_etc_info .title").bind("click", function () {
      $(this).stop().toggleClass("on");
      $(this).next(".info_txt").stop().slideToggle(300);
    });
    /* POPUP - 공통 */
    $(".popup").bind("click", function () {
      $(".popup_bg").addClass("on");
      $("html, body").css({
        "overflow-y": "hidden",
      });
    });
    /* POPUP - 기본정보변경 */
    $(".mypopup01").bind("click", function () {
      $(".mypopup01_con").addClass("on");
    });
    $(".popup_exit, .pop_btn01 > .exit").bind("click", function () {
      $(".popup_bg").removeClass("on");
      $(".popup_con").removeClass("on");
      $("html, body").css({
        "overflow-y": "auto",
      });
    });
    $(".popup_exit02, .pop_btn02 > .cancel").bind("click", function () {
      $(".mypopup02_con").removeClass("on");
      $(".mypopup01_con").addClass("on");
    });

    /* POPUP - 전화번호변경 */
    $(".mypopup02").bind("click", function () {
      $(".mypopup02_con").addClass("on");
      $(".mypopup01_con").removeClass("on");
    });
    $(".pop_number").bind("click", function () {
      $(".num_btn").addClass("on");
      $(".num_time").stop().show();
      $(".num_txt").stop().show();
    });

    /* POPUP - 전화번호 변경완료 */
    $(".pop_btn02 > .save").bind("click", function () {
      $(".mypopup03_con").addClass("on");
      $(".mypopup02_con").removeClass("on");
    });
    $(
      ".popup_exit03, .pop_btn03 > .exit, .pop_btn02 > .cancel, .popup_exit02"
    ).bind("click", function () {
      $(".mypopup03_con, .mypopup02_con").removeClass("on");
      $(".mypopup01_con").addClass("on");
      $(".num_btn").removeClass("on");
      $(".num_time").stop().hide();
      $(".num_txt").stop().hide();
    });
  },
};
</script>
