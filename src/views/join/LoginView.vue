<template>
  <section class="login">
    <div class="logo"><img src="images/logo.png" alt="logo" /></div>
    <div class="img"><img src="images/login_img.png" alt="img" /></div>
    <div class="login_form">
      <p class="txt">회원정보 확인을 위해 휴대폰번호를 입력해주세요.</p>
      <input class="id" type="text" placeholder="아이디" />
      <input class="pw" type="password" placeholder="비밀번호" />
      <button class="btn_style01" @click="$router.push('/')">확 인</button>
    </div>
    <div class="join_txt"><a href="#;">회원가입</a></div>
  </section>
</template>
<script>
export default {
  components: {},

  mounted() {
    //== HOME / SUB 공통 요소 화면설정 ==============================

    // 페이지 url로 top, bottom 설정
    this.$parent.f_urlCheck();
    // body css class changes
    document.body.classList.add("login_wrap");

    //================================================================
  },
};
</script>
