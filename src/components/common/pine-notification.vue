<template>
  <div class="notification">
    <i class="bx bx-alarm-exclamation notification-icon"></i>
    <span class="notification-title"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    isNotificationOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.notification {
  position: absolute;
  top: 40px;
  right: -310px;
  min-width: 300px;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid #e74c3c;
  border-radius: 10px;
  background-color: $white;
  transition: 400ms ease-in-out;

  &-active {
    transform: translateX(-310px);
  }

  &-icon {
    margin-right: 15px;
    color: #e74c3c;
    font-size: 25px;
  }

  &-title {
    color: $main-dark;
    font-size: 20px;
  }
}
</style>
