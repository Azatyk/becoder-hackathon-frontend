<template>
  <div class="map-header">
    <div class="back" @click="logout">
      <i class="bx bx-arrow-back back-icon"></i>
      <span class="back-label">Выход</span>
    </div>
    <div class="map-modes">
      <span
        class="map-mode"
        :class="{ 'map-mode-active': mapMode == 1 }"
        @click="$emit('change-map-mode')"
        >Спутниковая карта</span
      >
      <span
        class="map-mode"
        :class="{ 'map-mode-active': mapMode == 2 }"
        @click="$emit('change-map-mode')"
        >Схематичная карта</span
      >
    </div>
    <pine-button type="unsolid">Добавить изображение</pine-button>
  </div>
</template>

<script>
import pineButton from "@/components/common/pine-button.vue";

export default {
  props: {
    mapMode: {
      type: Number,
      required: true,
    },
  },

  components: {
    "pine-button": pineButton,
  },

  methods: {
    logout() {
      //   storage.removeItem("")
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.map {
  &-header {
    margin: 50px auto;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-modes {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-mode {
    padding: 7px 15px;
    margin-right: 10px;
    color: $main-dark;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 200ms ease-in-out;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &-active {
      border-color: $primary;
      opacity: 1;
    }
  }
}

.back {
  display: flex;
  align-items: center;
  transition: 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &-icon {
    margin-right: 10px;
    color: $primary;
    font-size: 20px;
  }

  &-label {
    color: $primary;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
