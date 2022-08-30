<template>
  <div
    v-if="isProductsLoaded"
    class="scroll"
    @scroll="scrollPage($event)"
  >
    <AppHeader :is-scroll="isScroll" />
    <router-view />
    <!-- <CartBtn v-if="!isCartPage" /> -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
// import CartBtn from '@/components/CartBtn.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
    // CartBtn
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const getData = () => {
      return store.dispatch('getData')
    }
    const getCartList = () => {
      return store.dispatch('Cart/getCartList')
    }
    const isProductsLoaded = computed(() => {
      return store.getters.isProductsLoaded
    })
    const isCartPage = computed(() => {
      return route.path === '/cart' || route.path === '/checkout' || route.path === '/login'
    })
    const isScroll = ref(false)
    const scrollPage = (e) => {
      isScroll.value = e.srcElement.scrollTop >= 50
      // console.log('!', isScroll.value)
    }
    onMounted(() => {
      getData()
      getCartList()
    })
    return {
      isProductsLoaded,
      isCartPage,
      isScroll,
      scrollPage
    }
  }
}
</script>

<style>
  .scroll{
    overflow: scroll;
    height: 100vh;
  }
</style>
