<template>
  <div class="home">
    <searchbar />
    <section>
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
export default {
  components: { Searchbar, ImageContainer },
  computed: {
    allImages() {
      return this.$store.getters.allImages;
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
}
</style>
