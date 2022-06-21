<template>
  <div class="coffeeDescription">
    <section class="coffeePhotoSection">
      <div
        class="coffeePhotoSection__background sectionBackground"
        :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}"
      />
      <div class="coffeePhotoSection__container">
        <div class="coffeePhotoSection__container__title leftSide">
          {{ clickedCoffeeBeanInfo.sloganI }}
        </div>
        <img
          :src="clickedCoffeeBeanInfo.main_img"
          alt=""
          class="coffeePhotoSection__container__img"
        >
        <div class="coffeePhotoSection__container__title rightSide">
          {{ clickedCoffeeBeanInfo.sloganII }}
        </div>
      </div>
    </section>
    <section class="coffeeArticleSection sectionSize">
      <div class="coffeeArticleSection__container">
        <div class="coffeeArticleSection__container__title">
          {{ clickedCoffeeBeanInfo.name }}
        </div>
        <div class="sectionBar" />
        <div class="coffeeArticleSection__container__content">
          <p
            class="coffeeArticleSection__container__content__text"
          >
            {{ clickedCoffeeBeanInfo.description }}
          </p>
          <p class="coffeeArticleSection__container__content__text">
            聽起來不錯？向下滾動閱讀更多內容。
          </p>
          <p class="coffeeArticleSection__container__content__recommendText">
            新鮮烤製，提供快速和免費的一流服務。<br>價格 NTD380 起
          </p>
        </div>
        <div>
          <Button
            :btn-msg="buyBtnMsg"
            class="coffeeArticleSection__container__btn"
          />
          <Button
            :btn-msg="tasteBtnMsg"
            class="coffeeArticleSection__container__btn"
          />
        </div>
      </div>
      <div
        class="coffeeArticleSection__img"
        :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}"
      >
        <img
          :src="clickedCoffeeBeanInfo.intro_imgI"
          alt=""
          class="coffeeArticleSection__img__pic"
        >
      </div>
    </section>
    <section class="transitionSection sectionSize">
      <div class="transitionSection__title1">
        手工<br>烘培
      </div>
      <div class="sectionBackground">
        <img
          :src="clickedCoffeeBeanInfo.background_imgI"
          alt=""
          class="transitionSection__img "
        >
      </div>
      <div class="transitionSection__title2">
        小批量<br>製作
      </div>
    </section>
    <section class="coffeeMoreInfoSection">
      <div class="coffeeMoreInfoSection__container">
        <div class="coffeeMoreInfoSection__container__title">
          告訴我更多
        </div>
        <div class="sectionBar" />
        <div class="coffeeMoreInfoSection__container__List">
          <div
            v-for="item in moreInfoListMsgArr"
            :key="item.title"
          >
            <div
              class="coffeeMoreInfoSection__container__textList"
            >
              <div class="coffeeMoreInfoSection__container__text">
                {{ item.title }}
              </div>
              <div
                class="coffeeMoreInfoSection__container__plus"
                @click="item.isOpen=!item.isOpen"
              >
                <SvgIcon
                  icon-name="chevron-down"
                  icon-class="plusIcon"
                />
              </div>
            </div>
            <transition name="fade">
              <!-- <div
              :class="['coffeeBeanDescription',{'coffeeBeanDescription-open':item.isOpen}]"
            > -->
              <div
                class="coffeeBeanDescription"
                v-show="item.isOpen"
              >
                {{ item.description }}
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div
        class="coffeeMoreInfoSection__img"
        :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}"
      >
        <img
          :src="clickedCoffeeBeanInfo.intro_imgII"
          alt=""
          class="coffeeArticleSection__img__pic"
        >
      </div>
    </section>
    <section class="coffeeReviewSection sectionSize">
      <div class="coffeeReviewSection__title1">
        喝過此商品的評價
      </div>
      <div class="coffeeReviewSection__text">
        早晨來一杯暢飲。真棒！讓我似乎還在夢中。
      </div>
      <div class="coffeeReviewSection__user">
        Alice Lee
      </div>
      <div class="sectionBackground">
        <img
          :src="clickedCoffeeBeanInfo.background_imgII"
          alt=""
          class="transitionSection__img "
        >
      </div>
      <div class="coffeeReviewSection__title2">
        告訴我們你覺得它像的味道<br>@caffeinewithmike
      </div>
    </section>
    <section class="coffeePurchaseSection sectionSize" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { computed, reactive, ref } from 'vue'
// import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    Button
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // 取得咖啡豆資料
    const store = useStore()
    const allCoffeeBeanInfo = computed(() => {
      console.log(props.name)
      return store.getters.coffeeBeanIntroData
    })
    const setClickedCoffeeBean = computed(() => {
      return allCoffeeBeanInfo.value.filter(item => item.name === props.name)
    })
    const clickedCoffeeBeanInfo = setClickedCoffeeBean.value[0]
    console.log(clickedCoffeeBeanInfo)
    const buyBtnMsg = ref('馬上購買')
    const tasteBtnMsg = ref('取得試飲')
    const moreInfoListMsgArr = reactive([
      {
        title: '口味：',
        description: `${clickedCoffeeBeanInfo.sloganI}與${clickedCoffeeBeanInfo.sloganII}`,
        isOpen: false
      },
      {
        title: '烘培：',
        description: clickedCoffeeBeanInfo.description_roasting,
        isOpen: false
      },
      {
        title: '沖煮方法：',
        description: clickedCoffeeBeanInfo.description_brew,
        isOpen: false
      },
      {
        title: '幕後花絮：',
        description: clickedCoffeeBeanInfo.description_story,
        isOpen: false
      },
      {
        title: 'SCAA杯測分數：',
        description: clickedCoffeeBeanInfo.description_score,
        isOpen: false
      },
      {
        title: '細節：',
        description: clickedCoffeeBeanInfo.description_roasting,
        isOpen: false
      },
      {
        title: '名稱從何而來？',
        description: clickedCoffeeBeanInfo.description_name,
        isOpen: false
      }
      // {
      //   title: '為什麼要在這裡購買特色咖啡？',
      //   description: clickedCoffeeBeanInfo.description_roasting
      // }
    ])

    return {
      clickedCoffeeBeanInfo,
      props,
      buyBtnMsg,
      tasteBtnMsg,
      moreInfoListMsgArr
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/_coffeeBeanIntro.scss';
</style>
