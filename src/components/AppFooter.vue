<template>
  <footer class="container">
    <div class="newsLetter__content ">
      <h3 class="newsLetter__description">
        註冊我們的時事通訊
        <span class="newsLetter__description--newline">以接收特別優惠、活動邀請等。</span>
      </h3>
      <router-link
        to="/login"
        class="newsLetter__button"
      >
        加入我們
      </router-link>
    </div>
    <div class="info__container">
      <div class="info__Content">
        <div class="info__title">
          Caffeine with Mike or Coffee with Milk
        </div>
        <div class="info__data">
          Calling:01-2345-6789
        </div>
        <div class="info__data">
          caffeineWithMike@gmail.com
        </div>
      </div>
      <div class="copyright">
        ©2020-2022 Created by Chanze Wu .<br>僅個人練習使用，不做任何商業用途<br>Only use for personal practice and not for any commercial purpose.
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_appFooter.scss";
</style>>
