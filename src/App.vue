<template>
  <Navbar />
  <div class="app"><RouterView /></div>
</template>
<script>
// import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  mounted() {
    this.getBreedList()
    this.getRandomImages();
    this.getRandomImages();

  },
  methods: {
    async getRandomImages() {
      await this.$store.dispatch("getRandomImages", 50);
    },
    async getBreedList() {
      await this.$store.dispatch("getBreedList");
    },
  },
};
</script>
<style scoped lang="scss">
.app {
  padding: 0 5%;
}
</style>
