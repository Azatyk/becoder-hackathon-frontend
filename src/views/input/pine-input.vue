<template>
  <div class="input-page">
    <input
      type="file"
      id="mainInput"
      ref="input"
      class="input-main"
      @change="handleChange"
      accept="image/*"
    />
    <label for="mainInput" class="input-label">
      <i class="bx bx-cloud-upload input-icon"></i>
      <h2 class="input-title">
        Загрузи одну или несколько изображений и узнай их историю
      </h2>
    </label>
    <div class="input-previews">
      <div class="input-preview-container">
        <img :src="previewImage" class="input-preview" />
      </div>
    </div>
    <pine-button>К карте</pine-button>
  </div>
</template>

<script>
import pineButton from "@/components/common/pine-button.vue";

export default {
  components: {
    "pine-button": pineButton,
  },

  data() {
    return {
      imageData: null,
      previewImage: null,
      uploadProgress: null,
    };
  },

  methods: {
    handleChange(event) {
      this.uploadProgress = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.input {
  &-page {
    padding-top: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-main {
    opacity: 0;
  }

  &-label {
    margin-bottom: 100px;
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid $primary;
    border-radius: 20px;
    border-style: dashed;
    background-color: $white;
    cursor: pointer;
    transition: 200ms ease-in-out;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  &-icon {
    color: $primary;
    font-size: 80px;
  }

  &-title {
    width: 80%;
    color: $main-dark;
    font-size: 25px;
    text-align: center;
    opacity: 0.7;
  }
}
</style>
