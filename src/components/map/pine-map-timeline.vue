<template>
  <div class="timeline">
    <i class="bx bxs-chevron-left timeline-icon"></i>
    <div class="dates">
      <span class="dates-date dates-previous">25.12.2020</span>
      <span class="dates-date dates-main">14.05.2021</span>
      <span class="dates-date dates-next">27.06.2021</span>
    </div>
    <i class="bx bxs-chevron-right timeline-icon"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.timeline {
  padding: 20px 40px;
  position: absolute;
  bottom: 10vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 90vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: $white;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  z-index: 5;

  &-icon {
    color: $main-dark;
    font-size: 25px;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
}

.dates {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
