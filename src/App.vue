<template>
  <div v-if="isProductsLoaded">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  setup () {
    const store = useStore()
    const getProductData = () => {
      return store.dispatch('getProductData')
    }
    const isProductsLoaded = computed(() => {
      return store.getters.isProductsLoaded
    })
    onMounted(() => {
      getProductData()
    })
    return {
      isProductsLoaded
    }
  }
}
</script>

<style>
</style>
