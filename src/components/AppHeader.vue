<template>
  <header :class="['header',{'header--scroll' : props.isScroll}]">
    <nav class="nav container">
      <router-link
        to="/"
        class="nav__logo"
      >
        <img
          src="@/assets/images/logo-white.png"
          alt="logo"
          class="nav__logo__img"
        >
        麥克咖啡因
      </router-link>
      <div :class="['nav__menu',{ 'nav__menu--open' : isNavMenuOpen }]">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link
              to="/"
              class="nav__link"
              @click="toggleMenuOpen"
            >
              首頁
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/explore"
              class="nav__link"
              @click="toggleMenuOpen"
            >
              探索咖啡
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/shop"
              class="nav__link"
              @click="toggleMenuOpen"
            >
              線上購物
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/location"
              class="nav__link"
              @click="toggleMenuOpen"
            >
              門市據點
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              to="/course"
              class="nav__link"
              @click="toggleMenuOpen"
            >
              咖啡課程
            </router-link>
          </li>
          <li
            class="nav__item account__container"
            v-if="isLogin"
          >
            <router-link
              class="account__content nav__link"
              to="/cart"
              @click="toggleMenuOpen"
            >
              <div class="account__name">
                {{ currentUserName }}
              </div>
              <div>歡迎回來</div>
            </router-link>
            <div
              class="logout__btn nav__link"
              @click="signOutAccount();toggleMenuOpen()"
            >
              登出
            </div>
          </li>
          <li
            class="nav__item"
            v-if="!isLogin"
          >
            <router-link
              to="/login"
              class="nav__link"
              @click="toggleMenuOpen"
            >
              會員登入
            </router-link>
          </li>
        </ul>
        <div
          class="nav__close"
          @click="toggleMenuOpen"
        >
          <SvgIcon
            icon-name="close"
            icon-class="symbol-icon"
          />
        </div>
      </div>
      <div
        class="nav__toggle"
        @click="toggleMenuOpen"
      >
        <SvgIcon
          icon-name="menu"
          icon-class="symbol-icon"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'AppHeader',
  props: {
    isScroll: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const store = useStore()
    const isNavMenuOpen = ref(false)
    const toggleMenuOpen = () => {
      isNavMenuOpen.value = !isNavMenuOpen.value
    }
    const isLogin = computed(() => {
      return store.getters['Auth/isLogin']
    })
    const currentUserName = computed(() => {
      return store.getters['Auth/currentUserName']
    })
    const signOutAccount = () => {
      return store.dispatch('Auth/signOutAccount')
    }
    return {
      props,
      isNavMenuOpen,
      toggleMenuOpen,
      isLogin,
      currentUserName,
      signOutAccount
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_appHeader.scss";
</style>>
