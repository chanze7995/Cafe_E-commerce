<template>
  <div :class="['registerContainer',{signUpMode:isFormSwitch}]">
    <div class="formsContainer">
      <div class="signin-signup">
        <form
          action="#"
          class="signInForm"
        >
          <h2 class="formTitle">
            會員登入
          </h2>
          <div class="formInputField">
            <SvgIcon
              icon-name="envelope"
              icon-class="formInputField__icon"
            />
            <input
              type="email"
              placeholder="信箱"
              v-model="singInData.email"
            >
          </div>
          <div class="formInputField">
            <SvgIcon
              icon-name="lock"
              icon-class="formInputField__icon"
            />
            <input
              type="password"
              placeholder="密碼"
              autocomplete="off"
              v-model="singInData.password"
            >
          </div>
          <div
            class="submitBtn"
            @click="singInAccount"
          >
            開始品嚐
          </div>
          <p class="socialText">
            或用社群平台登入
          </p>
          <div class="socialMediaBtnContainer">
            <a
              v-for="item in socialMedia"
              :href="item.link"
              class="socialMediaBtn"
              :key="item.type"
            >
              <SvgIcon
                :icon-name="item.type"
                icon-class="socialMediaBtn__icon"
              />
            </a>
          </div>
        </form>
        <form
          action="#"
          class="signUpForm"
        >
          <h2 class="formTitle">
            註冊會員
          </h2>
          <div class="formInputField">
            <SvgIcon
              icon-name="user"
              icon-class="formInputField__icon"
            />
            <input
              type="text"
              placeholder="使用者"
              v-model="registerData.name"
            >
          </div>
          <div class="formInputField">
            <SvgIcon
              icon-name="envelope"
              icon-class="formInputField__icon"
            />
            <input
              type="email"
              placeholder="信箱"
              v-model="registerData.email"
            >
          </div>
          <div class="formInputField">
            <SvgIcon
              icon-name="lock"
              icon-class="formInputField__icon"
            />
            <input
              type="password"
              placeholder="密碼"
              autocomplete="off"
              v-model="registerData.password"
            >
          </div>
          <div
            class="submitBtn"
            @click="registerAccount"
          >
            加入享受
          </div>
          <p class="socialText">
            或用社群平台註冊
          </p>
          <div class="socialMediaBtnContainer">
            <a
              v-for="item in socialMedia"
              :href="item.link"
              class="socialMediaBtn"
              :key="item.type"
            >
              <SvgIcon
                :icon-name="item.type"
                icon-class="socialMediaBtn__icon"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
    <div class="panelsContainer">
      <div class="panel signInPanel">
        <div class="panel__content">
          <h3>新朋友？</h3>
          <p>
            創建帳戶即可享受優惠
          </p>
          <Button
            :btn-msg="signUpBtnMsg"
            class="panel__btn"
            @click="switchFormHandler"
          />
        </div>
        <img
          src="@/assets/images/login/readingSideDoddle.svg"
          class="panel__img"
          alt=""
        >
      </div>
      <div class="panel singUpPanel">
        <div class="panel__content">
          <h3>我們的一員？</h3>
          <p>
            趕緊來沖煮咖啡吧！
          </p>
          <Button
            :btn-msg="signInBtnMsg"
            class="panel__btn"
            @click="switchFormHandler"
          />
        </div>
        <img
          src="@/assets/images/login/chillingDoddle.svg"
          class="panel__img"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Login',
  components: {
    Button
  },
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
