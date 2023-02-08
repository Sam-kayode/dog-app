<template>
  <div class="home">
    <searchbar />
    <section>
      <v-row>
        <v-col cols="6" xs="3" md="3">
          <image-container />
        <p class="mx-auto text-center">lorem lorem ipsum lofp fifgfg</p>
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
};
</script>

<style lang="scss">
</style>
