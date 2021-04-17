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
        :coords="markers[0].coords"
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
            layout: 'default#imageWithContent',
            ImageHref: '',
            imageSize: [30, 40],
            imageOffset: [-15, -35],
            content: `<div style='width: 170px; height: 100px; background-image: url(${marker.imagePath}); background-size: cover; background-position: center center; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);'></div>`,
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
      mapMode: 1,
      activeMarker: {
        imagePath: "",
      },
    };
  },

  methods: {
    setActiveImage(imageId) {
      this.markers.forEach((marker) => {
        if (marker.id == imageId) {
          this.activeMarker.createdAt = marker.createdAt;
          this.activeMarker.city = marker.city;
          this.activeMarker.device = marker.device;
          this.activeMarker.imagePath = marker.imagePath;
        }
      });
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
    width: 90vw;
    height: 70vh;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    z-index: 3;
  }

  &-card {
    position: absolute;
    top: 3vh;
    right: 3vh;
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
