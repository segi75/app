<template>
  <div>
    <section class="sub_box">
      <router-link :to="{ name: 'notice-detail' }" class="notice">
        <div class="list">
          <span class="badge">공지</span>
          <p class="title">복지관 휴무 안내 (8/15)</p>
          <p class="date">2022.08.12</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'notice-detail' }" class="notice">
        <div class="list">
          <p class="title">수강신청 시스템 점검 안내 (8/5)</p>
          <p class="date">2022.08.02</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'notice-detail' }" class="notice">
        <div class="list">
          <p class="title">인앱 결제 안내</p>
          <p class="date">2022.07.30</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'notice-detail' }" class="notice">
        <div class="list">
          <p class="title">인바디 측정 서비스 정상화 안내</p>
          <p class="date">2022.07.12</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'notice-detail' }" class="notice">
        <div class="list">
          <p class="title">구내식당 이용안내</p>
          <p class="date">2022.06.28</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'notice-detail' }" class="notice">
        <div class="list">
          <p class="title">셔틀버스 운행안내</p>
          <p class="date">2022.06.12</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'notice-detail' }" class="notice">
        <div class="list">
          <p class="title">복지관 휴무 안내 (6/6)</p>
          <p class="date">2022.06.02</p>
        </div>
      </router-link>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
