<template>
  <div>
    <ModalPopCp />
    <section class="sub_box">
      <div class="health">
        <!-- 날짜 선택 -->
        <DateSearchCp />

        <div class="health01">
          <div class="box modal_btn">
            <img src="/images/health01.jpg" alt="" />
          </div>
        </div>

        <p class="tit01">골격근 / 지방분석</p>
        <div class="health02 modal02_btn">
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
          <div class="box"><img src="/images/health03.jpg" alt="" /></div>
          <div class="box"><img src="/images/health04.jpg" alt="" /></div>
        </div>

        <p class="tit01">체성분 균형에 따른 CID유형</p>
        <div class="health02">
          <div class="box"><img src="/images/health05.jpg" alt="" /></div>
        </div>

        <p class="tit01">비만 분석</p>
        <div class="health03 modal03_btn">
          <div class="box"><img src="/images/health06.jpg" alt="" /></div>
          <div class="box"><img src="/images/health07.jpg" alt="" /></div>
        </div>

        <p class="tit01">복부비만 분석</p>
        <div class="health03 modal03_btn">
          <div class="box"><img src="/images/health06.jpg" alt="" /></div>
          <div class="box"><img src="/images/health07.jpg" alt="" /></div>
        </div>

        <p class="tit01">체수분 분석</p>
        <div class="health02 modal04_btn">
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
        </div>

        <p class="tit01">종합 분석</p>
        <div class="health02">
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
          <div class="box box02"><img src="/images/health08.jpg" alt="" /></div>
          <div class="box"><img src="/images/health09.jpg" alt="" /></div>
          <div class="box"><img src="/images/health09.jpg" alt="" /></div>
          <div class="box"><img src="/images/health09.jpg" alt="" /></div>
        </div>

        <p class="tit01">영양 분석</p>
        <div class="health02 modal05_btn">
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
          <div class="box"><img src="/images/health03.jpg" alt="" /></div>
          <div class="box"><img src="/images/health04.jpg" alt="" /></div>
          <div class="box"><img src="/images/health02.jpg" alt="" /></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import DateSearchCp from "@/components/health/inc/DateSearchCp.vue";
import ModalPopCp from "@/components/health/inc/ModalPopCp.vue";
export default {
  components: { DateSearchCp, ModalPopCp },
  mounted() {},
};
</script>
