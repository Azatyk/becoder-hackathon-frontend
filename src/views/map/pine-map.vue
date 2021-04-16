<template>
  <div class="map-page">
    <pine-map-header
      :mapMode="mapMode"
      @change-map-mode="mapMode == 1 ? (mapMode = 2) : (mapMode = 1)"
    />
    <div class="map-container">
      <yandex-map
        :coords="mapCoords"
        :zoom="mapZoom"
        style="width: 100%; height: 100%"
        :controls="[]"
        :map-type="mapMode == 1 ? 'hybrid' : 'map'"
        show-all-markers
      >
        <ymap-marker
          marker-id="1"
          :coords="markerCoords"
          :icon="iconSetting"
        ></ymap-marker>
        <ymap-marker
          marker-id="2"
          :coords="[42.888627, 71.347685]"
          :icon="iconSetting"
        ></ymap-marker>
        <ymap-marker
          marker-id="3"
          :coords="[42.891335, 71.355905]"
          :icon="iconSetting"
        ></ymap-marker>
      </yandex-map>
    </div>
  </div>
</template>

<script>
import mockImage from "@/assets/images/mockImage.jpg";
import pineMapHeader from "@/components/map/pine-map-header.vue";

export default {
  components: {
    "pine-map-header": pineMapHeader,
  },

  methods: {
    showConsole() {
      console.log("smth");
    },
  },

  data() {
    return {
      mapMode: 1,
      mapCoords: [42.890259, 71.341873],
      mapZoom: 16,
      markerCoords: [42.890259, 71.341873],
      iconSetting: {
        layout: "default#imageWithContent",
        ImageHref: "",
        imageSize: [30, 40],
        imageOffset: [-15, -35],
        content: `<div style='width: 170px; height: 100px; background-image: url(${mockImage}); background-size: cover; background-position: center center; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);'></div>`, // содержимое контента
        contentOffset: [-80, -100],
      },
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
    margin: 0 auto;
    width: 90vw;
    height: 70vh;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  }
}
</style>
