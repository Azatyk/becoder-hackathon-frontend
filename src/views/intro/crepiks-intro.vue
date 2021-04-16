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
    <button class="intro-button">Начать</button>
  </div>
</template>

<script setup></script>

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
    background-color: $primary;
    border-radius: 10px;
    color: #ffffff;
    padding: 10px 35px;
    border: 1px solid $primary;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-button:hover {
    opacity: 0.8;
  }
}
</style>
