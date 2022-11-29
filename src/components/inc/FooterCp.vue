<template>
  <div>
    <span v-html="copy"></span>

    <footer>
      <ul>
        <li>
          <router-link :to="{ name: 'mypage' }">
            <img src="/images/ic_nav01.png" alt="마이페이지" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'band-sync' }"
            ><img src="/images/ic_nav02.png" alt="인바디밴드1" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'band-setting' }"
            ><img src="/images/ic_nav02.png" alt="인바디밴드2" />
          </router-link>
        </li>
        <li class="home">
          <router-link :to="{ name: 'mbership' }">
            <img src="/images/ic_nav03.png" alt="모바일회원카드" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'alram' }"
            ><img src="/images/ic_nav04.png" alt="알림"
          /></router-link>
        </li>
        <li>
          <a href="#;"><img src="/images/ic_nav05.png" alt="즐겨찾기" /></a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      copy: "<copyright>copyrights ⓒ 복지통, All Right Reserved.</copyright>",
    };
  },
};
</script>
