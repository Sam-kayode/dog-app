<template>
  <div class="home">
    <searchbar />
    <Loader v-if="$store.state.load" />
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
      if (this.filteredImages[0]) {
        return this.filteredImages;
      } else {
        return this.$store.getters.allImages;
      }
    },
    filteredImages(){
      return this.$store.state.filteredImages
    }
  },
  methods: {
    getDogName(url) {
      let arr = url.split("/");
      return arr[4];
    },
    goToDetails(url) {
      this.$store.commit("UPDATE_DETAIL_IMAGE", url);
      this.$router.push(`/about/${this.getDogName(url)}`);
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
