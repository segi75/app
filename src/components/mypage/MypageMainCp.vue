<template>
  <div>
    <section>
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
                <a href="membership.html">
                  <p class="name">엔컴복지관</p>
                  <span class="ing">사용중</span>
                  <div class="number">
                    <span class="t01">회원번호</span>
                    <span class="t02">MCARD+2233+2010-00015</span>
                  </div>
                </a>
              </div>
              <div class="off">
                <a href="membership.html">
                  <p class="name">부산복지관</p>
                  <div class="number">
                    <span class="t01">회원번호</span>
                    <span class="t02">BSEGZ+1155+2020-00119</span>
                  </div>
                </a>
              </div>
              <div class="off">
                <a href="membership.html">
                  <p class="name">사랑복지관</p>
                  <div class="number">
                    <span class="t01">회원번호</span>
                    <span class="t02">SRGYW+1097+2015-00072</span>
                  </div>
                </a>
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
};
</script>
