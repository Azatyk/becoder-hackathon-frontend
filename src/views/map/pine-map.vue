<template>
  <div class="map-page">
    <pine-map-header
      :mapMode="mapMode"
      @change-map-mode="mapMode == 1 ? (mapMode = 2) : (mapMode = 1)"
    />
    <div class="map-container">
      <transition name="fade">
        <pine-image-card
          class="map-card"
          v-if="activeMarker.imagePath.length > 0"
          :imagePath="activeMarker.imagePath"
          :createdAt="activeMarker.createdAt"
          :city="activeMarker.city"
          :device="activeMarker.device"
          @close-card="removeActiveMarker"
        />
      </transition>
      <yandex-map
        :key="mapMode"
        :coords="mapCoords"
        style="width: 100%; height: 100%; z-index: 4"
        :controls="[]"
        :map-type="mapMode == 1 ? 'hybrid' : 'map'"
        show-all-markers
      >
        <ymap-marker
          v-for="marker in markers"
          :key="marker.id"
          :marker-id="marker.id"
          :coords="marker.coords"
          :icon="{
            content: `<div style='position: absolute; bottom: 100%; width: 170px; height: 100px; background-image: url(${marker.imagePath}); background-size: cover; background-position: center center; border: 5px solid white; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);'></div>`,
            contentOffset: [-80, -100],
          }"
          @click="setActiveImage(marker.id)"
        ></ymap-marker>
      </yandex-map>
    </div>
  </div>
</template>

<script>
import pineMapHeader from "@/components/map/pine-map-header.vue";
import markers from "@/data/markers.js";
import pineImageCard from "@/components/map/pine-image-card.vue";

export default {
  components: {
    "pine-map-header": pineMapHeader,
    "pine-image-card": pineImageCard,
  },

  data() {
    return {
      markers: markers,
      mapCoords: [],
      mapMode: 2,
      activeMarker: {
        imagePath: "",
      },
    };
  },

  mounted() {
    if (this.markers.length > 0) {
      this.mapCoords = this.markers[0].coords;
    }
  },

  methods: {
    setActiveImage(imageId) {
      this.markers.forEach((marker) => {
        if (marker.id == imageId) {
          this.activeMarker.createdAt = marker.createdAt;
          this.activeMarker.city = marker.city;
          this.activeMarker.device = marker.device;
          this.activeMarker.imagePath = marker.imagePath;
          this.activeMarker.coords = marker.coords;
        }
      });
      this.mapCoords = this.activeMarker.coords;
    },
    removeActiveMarker() {
      this.activeMarker = {
        imagePath: "",
      };
    },
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
    position: relative;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    border-radius: 10px;
    overflow: hidden;
    z-index: 3;
  }

  &-card {
    position: absolute;
    top: 15vh;
    right: 9vh;
    z-index: 3;
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out !important;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
