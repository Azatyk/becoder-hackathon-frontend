<template>
  <button
    class="button"
    :class="{
      unsolid: type == 'unsolid',
    }"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "solid",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.button {
  padding: 12px 30px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid $primary;
  border-radius: 10px;
  outline: none;
  background-color: $primary;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}

.unsolid {
  background-color: transparent;
  color: $primary;
}
</style>
