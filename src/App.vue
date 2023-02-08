<template>
  <div>
    <Navbar />
  </div>
  <RouterView />
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
body {
  overflow-y: auto !important;
  background: red !important;
  color: red;
  height: 100vh;
}
</style>
