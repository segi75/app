<template>
  <div>
    <section class="sub_box">
      <div class="inbody">
        <p class="sub_box_title">등록하실 기기를 선택하세요.</p>
        <p class="sub_box_tit02">밴드</p>
        <div class="list">
          <router-link :to="{ name: 'band-device-band3' }">
            <div class="band">
              <img src="/images/inbody_band.png" alt="" />
              <p class="tit">인바디밴드3</p>
            </div>
            <img class="arw" src="/images/ic_arw_r05.png" alt="" />
          </router-link>
        </div>

        <div class="list">
          <router-link :to="{ name: 'band-device-band2' }">
            <div class="band">
              <img src="/images/inbody_band02.png" alt="" />
              <p class="tit">인바디밴드2</p>
            </div>
            <img class="arw" src="/images/ic_arw_r05.png" alt="" />
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
