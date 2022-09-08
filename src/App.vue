<template>
  <Loading v-if="!isProductsLoaded" />
  <div v-else>
    <AppHeader :is-scroll="isScroll" />
    <router-view />
    <CartBtn v-if="!isCartPage" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import CartBtn from '@/components/CartBtn.vue'
import Loading from '@/components/Loading.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    CartBtn,
    Loading
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const getData = () => {
      return store.dispatch('Product/getData')
    }
    const getCartList = () => {
      return store.dispatch('Cart/getCartList')
    }
    const isProductsLoaded = computed(() => {
      return store.getters['Product/isProductsLoaded']
    })
    const isCartPage = computed(() => {
      return route.path === '/cart' || route.path === '/checkout' || route.path === '/login'
    })
    const isScroll = ref(false)
    const handleScroll = () => {
      isScroll.value = window.scrollY >= 95
    }
    onMounted(() => {
      getData()
      getCartList()
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      isProductsLoaded,
      isCartPage,
      isScroll
    }
  }
}
</script>

<style>
</style>
