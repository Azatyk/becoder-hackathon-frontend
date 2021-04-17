<template>
  <div>
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
    <transition name="fade">
      <div class="intro" v-show="this.isFirstPage">
        <div class="intro-image">
          <img
            src="@/assets/images/welcome-image.svg"
            alt="welcome_image"
            class="intro-image-content"
          />
        </div>
        <h1 class="intro-title">Добро пожаловать в Pine!</h1>
        <p class="intro-text">
          Загрузи фотографии из детства, с прошлой работы или школьные
          фотографии и вспомни где и когда они были сделаны с помощью Pine
        </p>
        <pine-button class="intro-button" @click="isFirstPage = false"
          >Начать</pine-button
        >
      </div>
    </transition>
    <transition name="show">
      <div class="intro" v-show="!this.isFirstPage">
        <div class="intro-image">
          <img
            src="@/assets/images/pine-email.svg"
            alt="welcome_image"
            class="intro-image-content"
          />
        </div>
        <h1 class="intro-title intro-title-email">
          Для начала нам понадобиться твоя электронная почта
        </h1>
        <input placeholder="Введите адрес почты" class="intro-input" />
        <pine-button class="intro-button">Далее</pine-button>
      </div>
    </transition>
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
      isFirstPage: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoadingOpen = false;
    }, 1500);
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
    transition: transform 500ms ease-in-out;
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
      font-weight: bold;
      color: #ffffff;
    }
  }

  &-image {
    margin-left: 30px;
    width: 260px;

    &-content {
      width: 100%;
    }
  }

  &-title {
    margin-top: 30px;
    color: $main-dark;

    &-email {
      width: 650px;
      text-align: center;
    }
  }

  &-text {
    margin-top: 15px;
    width: 750px;
    font-size: 25px;
    text-align: center;
    color: $main-dark;
    line-height: 140%;
    opacity: 0.7;
  }

  &-input {
    margin-top: 30px;
    border: 2px solid $primary;
    padding: 10px 15px;
    border-radius: 10px;
    width: 300px;
    outline: none;
    box-sizing: border-box;
    transition: 200ms ease-in-out;
  }

  &-input:focus {
    padding-left: 18px;
  }

  &-button {
    margin-top: 40px;
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out;
  will-change: opacity;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 1.5s ease-in-out;
  will-change: opacity;
}
.show-enter,
.show-leave-to {
  opacity: 0;
}
</style>
