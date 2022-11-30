<template>
  <div>
    <section class="sub_box">
      <div class="inbody">
        <div class="inbody_img">
          <img src="/images/inbody_band02_2.png" alt="" />
        </div>
        <div class="inbody_search">
          <p class="txt01">인바디밴드3</p>
          <p class="txt02">등록을 시작합니다.</p>
          <p class="txt03">기기의 전원이 켜져있는지 꼭 확인해 주세요.</p>
          <router-link :to="{ name: 'band-device-band3-apply' }">
            <button class="btn_style02">기기 검색</button>
          </router-link>
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
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
