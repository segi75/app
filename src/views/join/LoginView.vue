<template>
  <section class="login">
    <div class="logo"><img src="images/logo.png" alt="logo" /></div>
    <div class="img"><img src="images/login_img.png" alt="img" /></div>
    <div class="login_form">
      <p class="txt">회원정보 확인을 위해 휴대폰번호를 입력해주세요.</p>
      <input class="id" type="text" placeholder="휴대폰번호" />
      <button class="btn_style01" onclick="location.href='../../index.html'">
        확 인
      </button>
    </div>
    <div class="join_txt"><a href="#;">회원가입</a></div>
  </section>
</template>
<script>
export default {
  components: {},

  mounted() {
    // body css class changes
    document.body.classList.add("login_wrap");

    // 하단 바로가기 login페이지에서 제거
    this.$parent.f_loginPageCheck();
  },
};
</script>
