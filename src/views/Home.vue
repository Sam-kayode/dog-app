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
          @click="goToDetails(image)"
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
    getDetailImage() {
      return this.$store.getters.getDetailImage;
    },
  },
  methods: {
    getDogName(url) {
      let arr = url.split("/");
      return arr[4];
    },
    goToDetails(url) {
      //to check if its the same dog breed thats in Vuex store
      if (this.getDogName(url) === this.getDogName(this.getDetailImage)) {
        this.$store.commit("IS_IMAGE_UPDATED", false);
        this.$router.push(`/about/${this.getDogName(url)}`);
      } else {
        this.$store.commit("IS_IMAGE_UPDATED", true);
        this.$store.commit("UPDATE_DETAIL_IMAGE", url);
        this.$router.push(`/about/${this.getDogName(url)}`);
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  font-family: "Montserrat", sans-serif;
  .dog-name {
    text-transform: capitalize;
    .image {
      cursor: pointer;
    }
  }
}
</style>
