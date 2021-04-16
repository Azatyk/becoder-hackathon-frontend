<template>
  <div class="intro">
    <div
      class="intro-loading"
      :class="{
        'intro-loading-open': isLoadingOpen,
      }"
    >
      <div class="intro-loading-container">
        <img src="@/assets/images/pine-logo.svg" alt="pine_logo" />
        <div class="intro-loading-text">Pine</div>
      </div>
    </div>
    <div class="intro-image">
      <img
        src="@/assets/images/welcome-image.svg"
        alt="welcome_image"
        class="intro-image-content"
      />
    </div>
    <h1 class="intro-title">Добро пожаловать в Pine!</h1>
    <p class="intro-text">
      Узнай историю мест и времени своих фотографией,<br />
      отредактируй и узнай какие объекты расположены с помощью<br />
      Pine. Но для начала нам понадобиться твоя электронная почта:
    </p>
    <pine-button class="intro-button">Начать</pine-button>
  </div>
</template>

<script>
import pineButton from "@/components/common/pine-button";

export default {
  components: {
    "pine-button": pineButton,
  },
  data() {
    return {
      isLoadingOpen: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoadingOpen = false;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.intro {
  height: 100vh;
  box-sizing: border-box;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &-loading {
    width: 100%;
    position: fixed;
    bottom: 100vh;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary;
    z-index: 5;
    transition: transform 800ms ease-in-out;
    will-change: transform;

    &-open {
      -moz-transform: translateY(100vh);
      -ms-transform: translateY(100vh);
      -webkit-transform: translateY(100vh);
      -o-transform: translateY(100vh);
      transform: translateY(100vh);
    }

    &-container {
      display: flex;
      align-items: flex-end;
      margin-bottom: 80px;
    }

    &-text {
      margin-left: 30px;
      font-size: 130px;
      color: #ffffff;
    }
  }

  &-image {
    width: 260px;

    &-content {
      width: 100%;
    }
  }

  &-title {
    margin-top: 30px;
    color: $main-dark;
  }

  &-text {
    margin-top: 15px;
    width: 731px;
    font-size: 25px;
    text-align: center;
    color: $main-dark;
    opacity: 0.8;
  }

  &-button {
    margin-top: 40px;
  }
}
</style>
