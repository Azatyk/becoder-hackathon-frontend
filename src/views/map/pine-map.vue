<template>
  <div class="map-page">
    <div class="map-container">
      <yandex-map
        :coords="mapCoords"
        :zoom="mapZoom"
        style="width: 100%; height: 100%"
        :controls="[]"
        map-type="hybrid"
      >
        <ymap-marker marker-id="1" :coords="markerCoords"></ymap-marker>
      </yandex-map>
    </div>
  </div>
</template>

<script>
// import mockImage from "@/assets/images/mockImage.jpg"

export default {
  data() {
    return {
      mapCoords: [42.890259, 71.341873],
      mapZoom: 16,
      markerCoords: [42.890259, 71.341873],
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  &-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  &-container {
    margin: auto;
    margin-top: 10vh;
    width: 90vw;
    height: 70vh;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  }
}
</style>
