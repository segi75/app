<template>
  <div class="health_date">
    <button class="arw">
      <img src="images/ic_arw_l01.png" alt="이전" />
    </button>
    <button class="date" @click="openWinPop">22.11.15(화) 10:41</button>
    <button class="arw">
      <img src="images/ic_arw_r08.png" alt="다음" />
    </button>
    <WinPopup
      ref="winPopup"
      @onClose="(val) => evtCloseWinPopup(val)"
      @onRecvEvtFromWinPop="(val) => onRecvWinPop(val)"
    />
  </div>
</template>
<script>
import WinPopup from "@/components/inc/popup/WinPopup.vue";
export default {
  components: { WinPopup },
  methods: {
    openWinPop() {
      // vue의 라우터에 등록한 팝업창 주소를 uri로 설정하도록 한다
      let uri = "/healthRecord";
      this.$refs.winPopup.openWinPop(uri);
    },
  },
};
</script>
