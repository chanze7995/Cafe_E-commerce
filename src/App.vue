<template>
  <div v-if="isProductsLoaded">
    <AppHeader />
    <router-view />
    <CartBtn v-if="!isCartPage" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import CartBtn from '@/components/CartBtn.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    CartBtn
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const getData = () => {
      return store.dispatch('getData')
    }
    const isProductsLoaded = computed(() => {
      return store.getters.isProductsLoaded
    })
    const isCartPage = computed(() => {
      return route.path === '/cart'
    })
    onMounted(() => {
      getData()
    })
    return {
      isProductsLoaded,
      isCartPage
    }
  }
}
</script>

<style>
</style>
