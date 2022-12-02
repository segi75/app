<template>
  <div>
    <section class="sub_box">
      <div class="inbody inbody02">
        <p class="sub_box_title">체중을 알려주세요</p>
        <p class="sub_box_tit03">소모하신 칼로리를 측정해 드립니다.</p>
        <div class="body_input">
          <input type="text" placeholder="65.8" /><span>kg</span>
        </div>

        <button
          class="btn_style05"
          @click="$router.push({ name: 'band-device-band3-infoh' })"
        >
          확인
        </button>
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
