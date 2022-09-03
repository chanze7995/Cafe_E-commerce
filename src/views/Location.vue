<template>
  <div>
    <section class="location-banner">
      <video
        src="@/assets/video/coffeeStore.mp4"
        muted
        loop
        autoplay
        class="location-banner__video"
      />
      <div class="location-banner__content container">
        <h1 class="location-banner__title">
          門市據點
        </h1>
        <h2 class="location-banner__description">
          蒞臨參觀您附近的Caffiene with Mike咖啡館，<br>品嚐美味的咖啡和食物，舉辦教育研討會等。
        </h2>
      </div>
    </section>
    <section class="store__card__container container">
      <div
        v-for="item in storeData"
        :key="item.name"
        class="store__card"
      >
        <div class="store__card__background">
          <img
            :src="require(`@/assets/images/cafe/${item.imgName}`)"
            :alt="item.name"
            class="store__card__pic"
          >
        </div>
        <div class="store__card__content">
          <h3 class="store__card__title">
            {{ item.name }}
          </h3>
          <p class="store__card__description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const storeData = reactive([
      {
        name: '十字街市場',
        description: '我們的十字街市場咖啡館附近是歷史悠久的公共市場之一，在自然光線下沐浴，使之遠離都市生活的喧囂。品嚐我們的一種季節性招牌飲品放鬆身心，或拜訪市場內的鄰居前在此休息。',
        imgName: 'cafe0.jpg'
      },
      {
        name: '海港角',
        description: '海港角提供風景的咖啡。這間咖啡廳的落地窗可俯瞰海港和標誌性的建築，既時尚又誘人。除了我們的招牌咖啡和咖啡館菜單之外，我們還增加了生啤酒，葡萄酒和小批量雞尾酒。因此，您幾乎永遠都不必離開。',
        imgName: 'cafe1.jpg'
      },
      {
        name: '貝塞斯達新月',
        description: '在此與朋友見面，讀書或研究您的商業計劃。這是一家明亮且通風的咖啡館，以創造力和藝術聞名的歷史街區文青們的最愛聚集地，並且是社區和合作中心的常年樞紐。',
        imgName: 'cafe2.jpg'
      }
    ])
    return {
      storeData
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/views/_location.scss";
</style>
