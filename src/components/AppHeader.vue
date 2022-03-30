<template>
  <header>
    <ul :class="['headerNavbar', { mobileMenuOpen: isMobileMenuOpen }]">
      <li class="headerNavbar__item">
        <router-link to="/">
          首頁
        </router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/explore">
          探索咖啡
        </router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/shop">
          線上購物
        </router-link>
      </li>
      <li class="headerNavbar__logoImg">
        <router-link to="/">
          <img
            src="@/assets/images/logo.svg"
            alt="logo"
          >
        </router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/location">
          門市據點
        </router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/course">
          咖啡課程
        </router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/login">
          會員
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AppHeader',
  setup () {
    const isMobileMenuOpen = ref(false)
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    return {
      isMobileMenuOpen,
      toggleMobileMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_appHeader.scss";
</style>>
