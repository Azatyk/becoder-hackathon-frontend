<template>
  <div
    class="notification"
    :class="{ 'notification-active': isNotificationOpen }"
  >
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

  watch: {
    isNotificationOpen() {
      if (this.isNotificationOpen) {
        setTimeout(() => {
          this.$emit("close-notification");
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.notification {
  position: absolute;
  top: 40px;
  right: -410px;
  padding: 10px 30px;
  max-width: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid $primary;
  border-radius: 10px;
  background-color: $white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 400ms ease-in-out;
  z-index: 10;

  &-active {
    transform: translateX(-430px);
  }

  &-icon {
    margin-right: 15px;
    color: #e74c3c;
    font-size: 35px;
  }

  &-title {
    margin: none;
    color: $main-dark;
    font-size: 20px;
    line-height: 130%;
  }
}
</style>
