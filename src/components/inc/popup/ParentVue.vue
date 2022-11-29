<template>
  <div>
    <button type="button" @click="openWinPop">윈 팝업 띄우기</button>
    <button type="button" @click="sendToChild">윈 팝업으로 전송</button>

    <WinPopup
      ref="winPopup"
      @onClose="(val) => evtCloseWinPopup(val)"
      @onRecvEvtFromWinPop="(val) => onRecvWinPop(val)"
    >
    </WinPopup>
  </div>
</template>

<script>
import WinPopup from "@/components/inc/popup/WinPopup.vue";

export default {
  name: "ParentVue",
  components: {
    WinPopup: WinPopup,
  },
  methods: {
    evtCloseWinPopup() {
      console.log("evtCloseWinPopup () ========  ");
    },

    openWinPop() {
      // vue의 라우터에 등록한 팝업창 주소를 uri로 설정하도록 한다
      let uri = "/inc/childwinpop?param1=abc" + "&param2=def";
      this.$refs.winPopup.openWinPop(uri);
    },

    onRecvWinPop(recvObj) {
      console.log("onRecvWinPop  ---------");

      if (recvObj.evt != null) {
        // 저장이 정상적으로 완료된 경우

        switch (recvObj.evt) {
          case "message":
            console.log("윈 팝업으로 부터 수신 메세지 : " + recvObj.message);
            break;
        }
      }
    },

    sendToChild() {
      this.$refs.winPopup.sendEvtToChild({ msg: "abcde" });
    },
  },
};
</script>

<style scoped></style>
