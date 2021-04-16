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
  background-color: $primary;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px 35px;
  border: 1px solid $primary;
  cursor: pointer;
  transition: 200ms ease-in-out;
  outline: none;
}

.button:hover {
  opacity: 0.8;
}

.unsolid {
  background-color: transparent;
  color: $primary;
}
</style>
