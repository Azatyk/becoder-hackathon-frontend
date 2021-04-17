<template>
  <div>
    <transition name="show" appear>
      <div
        class="intro-loading"
        :class="{
          'intro-loading-open': isLoadingOpen,
        }"
      >
        <div class="intro-loading-container">
          <img
            src="@/assets/images/pine-logo.svg"
            class="intro-loading-image"
            alt="pine_logo"
          />
          <div class="intro-loading-text">Pine</div>
        </div>
      </div>
    </transition>
    <transition name="fade" appear mode="out-in">
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
          Загрузи фотографии из детства, с работы или школы. Вспомни где и когда
          они были сделаны с помощью Pine
        </p>
        <pine-button
          class="intro-button"
          @click="isFirstPage = false"
          v-if="this.isFirstPage"
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
        <input
          v-model="email"
          placeholder="Введи адрес почты"
          class="intro-input"
        />
        <pine-button
          class="intro-button intro-button-email"
          @click="handleNextButton"
          v-if="!this.isFirstPage"
          >Далее</pine-button
        >
      </div>
    </transition>
  </div>
</template>

<script>
import pineButton from "@/components/common/pine-button";
import { getUser } from "@/requests/users.js";

export default {
  components: {
    "pine-button": pineButton,
  },
  data() {
    return {
      isLoadingOpen: true,
      isFirstPage: true,
      email: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoadingOpen = false;
    }, 1500);
  },
  methods: {
    handleNextButton() {
      getUser(this.email)
        .then((res) => {
          localStorage.setItem("userId", res.data.user.id);
          this.$router.push("/map");
        })
        .catch((err) => console.log(err));
    },
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
    font-size: 16px;
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

@media (max-width: 800px) {
  .intro {
    &-title {
      font-size: 25px;

      &-email {
        width: 400px;
      }
    }

    &-text {
      width: 400px;
      font-size: 18px;
    }

    &-loading {
      &-image {
        width: 100px;
      }

      &-text {
        font-size: 90px;
      }
    }
  }
}

@media (max-width: 450px) {
  .intro {
    padding: 10% 0;

    &-title {
      font-size: 22px;

      &-email {
        width: 320px;
      }
    }

    &-text {
      width: 310px;
      font-size: 16px;
    }
  }
}

@media (max-width: 320px) {
  .intro {
    &-image {
      width: 240px;
    }

    &-title {
      font-size: 20px;

      &-email {
        width: 300px;
      }
    }

    &-text {
      margin-top: 5px;
    }

    &-button {
      margin-top: 10px;
      padding: 6px 20px;

      &-email {
        margin-top: 30px;
      }
    }

    &-loading {
      &-image {
        width: 80px;
      }

      &-text {
        font-size: 70px;
      }
    }

    &-input {
      width: 280px;
    }
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out;
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
