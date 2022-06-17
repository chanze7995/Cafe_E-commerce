<template>
  <Swiper
    :loop="true"
    :slides-per-view="3"
    :centered-slides="true"

    navigation
    :pagination="{ clickable: true }"
    :modules="modules"

    @swiper="onSwiper"
  >
    <swiper-slide
      v-for="item in coffeeBeanIntroData"
      :key="item.docId"
    >
      <router-link
        :to="{
          name:'CoffeeBeanIntro',
          params:{
            name:item.name
          }
        }"
      >
        <img
          class="coffee-img"
          :src="item.main_img"
          alt=""
        >
      </router-link>
    </swiper-slide>
  </Swiper>
</template>
<script>
import { computed, watch, nextTick } from 'vue'
import { useStore } from 'vuex'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'

import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, A11y])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const store = useStore()
    const coffeeBeanIntroData = computed(() => {
      const data = store.getters.coffeeBeanIntroData
      const sortData = data.sort((a, b) => {
        return a.id - b.id
      })
      return sortData
    })
    console.log(store.getters.coffeeBeanIntroData)
    const onSwiper = (swiper) => {
      watch(coffeeBeanIntroData, () => {
        nextTick(() => {
          swiper.update()
        })
      })
    }
    return {
      coffeeBeanIntroData,
      onSwiper,
      modules: [Navigation, Pagination, A11y]
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/views/_explore.scss';
</style>
