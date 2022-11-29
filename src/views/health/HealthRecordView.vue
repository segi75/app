<template>
  <div>
    <header>
      <div class="top">
        <router-link :to="{ name: 'health' }">
          <button class="btn">취소</button>
        </router-link>

        <p class="txt">데이터 선택</p>
        <router-link :to="{ name: 'health' }">
          <button class="btn">저장</button>
        </router-link>
      </div>
    </header>

    <section class="sub_box">
      <div class="health">
        <div class="date_list">
          <input type="radio" id="date01" name="date" checked="" />
          <label for="date01">
            <span></span>
            <div class="txt_wrap">
              <div class="date">
                <p class="txt01">22.10.31(월) 09:37</p>
                <p class="txt02">인바디BAND3</p>
              </div>
              <div class="weight">
                <p class="txt01">체중 : <span class="str">65.3kg</span></p>
                <p class="txt02">체지방률 : 16.1%</p>
              </div>
            </div>
          </label>
        </div>

        <div class="date_list">
          <input type="radio" id="date02" name="date" />
          <label for="date02">
            <span></span>
            <div class="txt_wrap">
              <div class="date">
                <p class="txt01">22.10.31(월) 09:37</p>
                <p class="txt02">인바디BAND3</p>
              </div>
              <div class="weight">
                <p class="txt01">체중 : <span class="str">65.3kg</span></p>
                <p class="txt02">체지방률 : 16.1%</p>
              </div>
            </div>
          </label>
        </div>

        <div class="date_list">
          <input type="radio" id="date03" name="date" />
          <label for="date03">
            <span></span>
            <div class="txt_wrap">
              <div class="date">
                <p class="txt01">22.10.03(월) 09:24</p>
                <p class="txt02">인바디BAND3</p>
              </div>
              <div class="weight">
                <p class="txt01">체중 : <span class="str">67.0kg</span></p>
                <p class="txt02">체지방률 : 17.1%</p>
              </div>
            </div>
          </label>
        </div>

        <div class="date_list">
          <input type="radio" id="date04" name="date" />
          <label for="date04">
            <span></span>
            <div class="txt_wrap">
              <div class="date">
                <p class="txt01">22.09.19(월) 10:12</p>
                <p class="txt02">인바디BAND3</p>
              </div>
              <div class="weight">
                <p class="txt01">체중 : <span class="str">67.2kg</span></p>
                <p class="txt02">체지방률 : 17.8%</p>
              </div>
            </div>
          </label>
        </div>

        <div class="date_list">
          <input type="radio" id="date05" name="date" />
          <label for="date05">
            <span></span>
            <div class="txt_wrap">
              <div class="date">
                <p class="txt01">22.09.05(월) 09:14</p>
                <p class="txt02">인바디BAND3</p>
              </div>
              <div class="weight">
                <p class="txt01">체중 : <span class="str">68.4kg</span></p>
                <p class="txt02">체지방률 : 18.5%</p>
              </div>
            </div>
          </label>
        </div>

        <div class="date_list">
          <input type="radio" id="date06" name="date" />
          <label for="date06">
            <span></span>
            <div class="txt_wrap">
              <div class="date">
                <p class="txt01">22.08.22(월) 08:49</p>
                <p class="txt02">인바디BAND3</p>
              </div>
              <div class="weight">
                <p class="txt01">체중 : <span class="str">69.1kg</span></p>
                <p class="txt02">체지방률 : 18.9%</p>
              </div>
            </div>
          </label>
        </div>

        <div class="date_list">
          <input type="radio" id="date07" name="date" />
          <label for="date07">
            <span></span>
            <div class="txt_wrap">
              <div class="date">
                <p class="txt01">22.08.08(월) 09:52</p>
                <p class="txt02">인바디BAND3</p>
              </div>
              <div class="weight">
                <p class="txt01">체중 : <span class="str">69.5kg</span></p>
                <p class="txt02">체지방률 : 19.0%</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},

  mounted() {
    // body css class changes
    document.body.classList.add("sub_con");

    // 우측메뉴 열고 닫기
    $(".m_menu_btn").bind("click", function () {
      $(".m_menu_wrap").fadeIn(300);
    });
    $(".m_menu_close").bind("click", function () {
      $(".m_menu_wrap").fadeOut(300);
    });
  },
};
</script>
