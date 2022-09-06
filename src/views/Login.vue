<template>
  <div>
    <div class="header-background" />
    <div :class="['register__container',{'sign-up--active':isFormSwitch}]">
      <div class="forms__container">
        <div class="forms">
          <form
            action="#"
            class="sign-in__form"
          >
            <h2 class="form__title">
              會員登入
            </h2>
            <div class="form__input">
              <SvgIcon
                icon-name="envelope"
                icon-class="symbol-icon"
              />
              <input
                type="email"
                placeholder="信箱"
                v-model="singInData.email"
              >
            </div>
            <div class="form__input">
              <SvgIcon
                icon-name="lock"
                icon-class="symbol-icon"
              />
              <input
                type="password"
                placeholder="密碼"
                autocomplete="off"
                v-model="singInData.password"
              >
            </div>
            <div
              class="submit__btn"
              @click="singInAccount"
            >
              開始品嚐
            </div>
            <p class="social-media__text">
              或用社群平台登入
            </p>
            <div class="social-media__btn__container">
              <a
                v-for="item in socialMedia"
                :href="item.link"
                class="social-media__btn"
                :key="item.type"
              >
                <SvgIcon
                  :icon-name="item.type"
                  icon-class="symbol-icon"
                />
              </a>
            </div>
          </form>
          <form
            action="#"
            class="sign-up__form"
          >
            <h2 class="form__title">
              註冊會員
            </h2>
            <div class="form__input">
              <SvgIcon
                icon-name="user"
                icon-class="symbol-icon"
              />
              <input
                type="text"
                placeholder="使用者"
                v-model="registerData.name"
              >
            </div>
            <div class="form__input">
              <SvgIcon
                icon-name="envelope"
                icon-class="symbol-icon"
              />
              <input
                type="email"
                placeholder="信箱"
                v-model="registerData.email"
              >
            </div>
            <div class="form__input">
              <SvgIcon
                icon-name="lock"
                icon-class="symbol-icon"
              />
              <input
                type="password"
                placeholder="密碼"
                autocomplete="off"
                v-model="registerData.password"
              >
            </div>
            <div
              class="submit__btn"
              @click="registerAccount"
            >
              加入享受
            </div>
            <p class="social-media__text">
              或用社群平台註冊
            </p>
            <div class="social-media__btn__container">
              <a
                v-for="item in socialMedia"
                :href="item.link"
                class="social-media__btn"
                :key="item.type"
              >
                <SvgIcon
                  :icon-name="item.type"
                  icon-class="symbol-icon"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels__container">
        <div class="panel sign-in__panel">
          <div class="panel__content">
            <h3 class="panel__title">
              新朋友？
            </h3>
            <p class="panel__description">
              創建帳戶即可享受優惠
            </p>
            <button
              class="button"
              @click="switchFormHandler"
            >
              加入我們
            </button>
          </div>
          <img
            src="@/assets/images/login/readingSideDoddle.svg"
            class="panel__img"
            alt=""
          >
        </div>
        <div class="panel sign-up__panel">
          <div class="panel__content">
            <h3 class="panel__title">
              我們的一員？
            </h3>
            <p class="panel__description">
              趕緊來沖煮咖啡吧！
            </p>
            <button
              class="button"
              @click="switchFormHandler"
            >
              登入會員
            </button>
          </div>
          <img
            src="@/assets/images/login/chillingDoddle.svg"
            class="panel__img"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Login',
  setup () {
    const store = useStore()
    const singInData = reactive({
      email: '',
      password: ''
    })
    const registerData = reactive({
      name: '',
      email: '',
      password: ''
    })
    const registerAccount = () => {
      if (registerData.name === '') {
        alert('請輸入帳戶名')
        return
      }
      return store.dispatch('Auth/registerAccount', registerData)
    }
    const singInAccount = () => {
      return store.dispatch('Auth/singInAccount', singInData)
    }

    const socialMedia = reactive([{
      type: 'facebook',
      link: '#'
    }, {
      type: 'line',
      link: '#'
    }, {
      type: 'google',
      link: '#'
    }, {
      type: 'apple',
      link: '#'
    }])
    const signUpBtnMsg = ref('註冊帳號')
    const signInBtnMsg = ref('登入帳號')
    const isFormSwitch = ref(false)
    const switchFormHandler = () => {
      isFormSwitch.value = !isFormSwitch.value
    }

    return {
      singInData,
      registerData,
      socialMedia,
      signUpBtnMsg,
      signInBtnMsg,
      isFormSwitch,
      switchFormHandler,
      registerAccount,
      singInAccount
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/views/_login.scss";
</style>
