<template>
  <div class="input-page">
    <a-upload-dragger
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      @change="handleChange"
      class="input-page-input"
    >
      <p class="ant-upload-drag-icon">
        <i class="bx bx-download input-page-icon"></i>
      </p>
      <p class="ant-upload-text input-page-upload-text">
        Выбери одну или несколько картинок и узнай историю
      </p>
    </a-upload-dragger>
    <div class="input-page-container">
      <div class="clearfix">
        <a-upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          list-type="picture-card"
          :file-list="fileList"
          @preview="handlePreview"
          @change="handleChang"
        ></a-upload>
        <a-modal
          :visible="previewVisible"
          :footer="null"
          @cancel="handleCancel"
        >
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </div>
    </div>
    <pine-button class="input-page-button">Далее</pine-button>
  </div>
</template>

<script>
import pineButton from "@/components/common/pine-button";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  components: {
    "pine-button": pineButton,
  },
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      fileList: [],
    };
  },
  methods: {
    handleChange(info) {
      this.fileList = info.fileList;
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChang({ fileList }) {
      this.fileList = fileList;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-page {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-input {
    height: 300px;
    width: 700px;
  }

  &-container {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 896px;
  }

  &-button {
    margin-top: 20px;
  }

  &-icon {
    color: #ff7f50;
    font-size: 70px;
  }

  &-upload-text {
    font-family: "SF Pro Display", sans-serif !important;
    font-size: 25px !important;
    width: 70%;
    margin-right: auto !important;
    margin-left: auto !important;
  }
}
</style>

<style lang="scss">
.ant-upload-drag {
  border: 1px dashed #ff7f50 !important;
}

.ant-upload-list-text {
  display: none !important;
}
</style>
