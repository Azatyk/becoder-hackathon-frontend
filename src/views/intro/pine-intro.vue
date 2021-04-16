<template>
  <div class="intro">
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
