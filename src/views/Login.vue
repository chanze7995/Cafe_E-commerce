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
            <Icon
              icon-name="user"
              icon-class="formInputField__icon"
            />
            <input
              type="text"
              placeholder="使用者"
            >
          </div>
          <div class="formInputField">
            <Icon
              icon-name="lock"
              icon-class="formInputField__icon"
            />
            <input
              type="password"
              placeholder="密碼"
            >
          </div>
          <input
            type="submit"
            value="開始品嚐"
            class="submitBtn"
          >
          <p class="socialText">
            或用社群平台登入
          </p>
          <div class="socialMediaBtnContainer">
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="facebook"
                icon-class="socialMediaBtn__icon"
              />
            </a>
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="twitter"
                icon-class="socialMediaBtn__icon"
              />
            </a>
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="google"
                icon-class="socialMediaBtn__icon"
              />
            </a>
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="linkedin"
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
            <Icon
              icon-name="user"
              icon-class="formInputField__icon"
            />
            <input
              type="text"
              placeholder="使用者"
            >
          </div>
          <div class="formInputField">
            <Icon
              icon-name="envelope"
              icon-class="formInputField__icon"
            />
            <input
              type="email"
              placeholder="信箱"
            >
          </div>
          <div class="formInputField">
            <Icon
              icon-name="lock"
              icon-class="formInputField__icon"
            />
            <input
              type="password"
              placeholder="密碼"
            >
          </div>
          <input
            type="submit"
            value="註冊"
            class="submitBtn"
          >
          <p class="socialText">
            或用社群平台註冊
          </p>
          <div class="socialMediaBtnContainer">
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="facebook"
                icon-class="socialMediaBtn__icon"
              />
            </a>
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="twitter"
                icon-class="socialMediaBtn__icon"
              />
            </a>
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="google"
                icon-class="socialMediaBtn__icon"
              />
            </a>
            <a
              href="#"
              class="socialMediaBtn"
            >
              <Icon
                icon-name="linkedin"
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
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/views/_login.scss";
</style>
