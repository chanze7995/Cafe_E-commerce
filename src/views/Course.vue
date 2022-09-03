<template>
  <div>
    <section class="course-banner">
      <img
        src="@/assets/images/course/cupping.jpg"
        alt=""
        class="course-banner__background"
      >
      <div class="course-banner__content container">
        <h1 class="course-banner__title">
          咖啡課程
        </h1>
        <h2 class="course-banner__description">
          讓我們一起煮更好的咖啡。
        </h2>
      </div>
    </section>
    <ul class="course-info__container container">
      <li class="course-info__content">
        <h1 class="course-info__title">
          小班級
        </h1>
        <p class="course-info__description">
          為我們批發商的免費課程，提供了關於沖煮方法和先進技術的深入說明。
        </p>
      </li>
      <li class="course-info__content">
        <h1 class="course-info__title">
          每週咖啡時光
        </h1>
        <p class="course-info__description">
          加入我們品嚐 Caffeine with Mike 的新品並增進您的咖啡知識。
        </p>
      </li>
      <li class="course-info__content">
        <h1 class="course-info__title">
          沖煮指南
        </h1>
        <p class="course-info__description">
          在家沖煮咖啡應該並非難事，透過我們的一項沖煮指南學習如何改善您的方法。
        </p>
      </li>
    </ul>
    <section class="current-activity">
      <div class="current-activity__content">
        <div class="current-activity__title">
          因疫情尚未安排任何活動。
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/views/_course.scss";
</style>
