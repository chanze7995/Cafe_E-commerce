<template>
  <Loading v-if="isLoading" />
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
    const isLoading = computed(() => {
      return store.getters.isLoading
    })
    const isCartPage = computed(() => {
      return route.path === '/cart' || route.path === '/checkout' || route.path === '/login' || route.path === '/success'
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
      isLoading,
      isCartPage,
      isScroll
    }
  }
}
</script>

<style>
</style>
