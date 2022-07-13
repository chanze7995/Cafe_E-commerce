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
      <li
        class="headerNavbar__item"
        v-if="isLogin"
      >
        <router-link to="/login">
          {{ currentUserName }}歡迎回來
        </router-link>
      </li>
      <li
        class="headerNavbar__item"
        v-if="!isLogin"
      >
        <router-link to="/login">
          會員
        </router-link>
      </li>
      <li
        class="headerNavbar__item"
        v-else
      >
        <div @click="singOutAccount">
          登出
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'AppHeader',
  setup () {
    const store = useStore()
    const isMobileMenuOpen = ref(false)
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }
    const isLogin = computed(() => {
      return store.getters['Auth/isLogin']
    })
    const currentUserName = computed(() => {
      console.log(!(store.getters['Auth/currentUserName'] === ''))
      return store.getters['Auth/currentUserName']
    })
    const singOutAccount = () => {
      return store.dispatch('Auth/singOutAccount')
    }
    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      isLogin,
      currentUserName,
      singOutAccount
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_appHeader.scss";
</style>>
