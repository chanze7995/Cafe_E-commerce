<template>
  <div class="loading__container">
    <div class="loading__pic">
      <div class="cup-group">
        <div class="cup">
          <div class="coffee" />
        </div>
        <div class="cup-handle" />
      </div>
      <div class="plate-group">
        <div class="plate--front" />
        <div class="plate--hind" />
      </div>
    </div>
    <div class="loading__content">
      <div class="title">
        沖泡中
      </div>
      <div class="bounce-ball">
        <div class="ball" />
        <div class="ball" />
        <div class="ball" />
        <div class="ball" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_loading.scss';
</style>
