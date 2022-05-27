<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { onMounted } from 'vue'
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
    onMounted(() => {
      getProductData()
    })
    return {

    }
  }
}
</script>

<style>
</style>
