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
};
</script>
<style scoped lang="scss">
.app {
  padding: 0 5%;
}
</style>
