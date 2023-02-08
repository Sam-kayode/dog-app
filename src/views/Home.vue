<template>
  <div class="home">
    <searchbar />
    <Loader v-if="imageCount" />
    <section v-else>
      <v-row>
        <v-col
          cols="6"
          xs="3"
          md="3"
          v-for="(image, index) in allImages"
          :key="index"
          class="image"
        >
          <image-container :src="image" />
          <p class="mx-auto text-center dog-name">{{ getDogName(image) }}</p>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import ImageContainer from "../components/ImageContainer.vue";
import Searchbar from "../components/Searchbar.vue";
import Loader from "../components/Loader.vue";
export default {
  components: { Searchbar, ImageContainer, Loader },
  computed: {
    allImages() {
      return this.$store.getters.allImages;
    },
    imageCount() {
      if (this.allImages.length < 100) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    getDogName(url) {
      let arr = url.split("/");
      return arr[4];
    },
  },
};
</script>

<style lang="scss">
.dog-name {
  text-transform: capitalize;
  .image {
    cursor: pointer;
  }
}
</style>
