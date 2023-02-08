<template>
  <div class="navbar d-flex align-items-center justify-space-between">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="" @click="getRandomImages"/>
    </div>

    <a href="https://dog.ceo/dog-api/documentation" target="_blank"
      >Dog-Api documentation</a
    >
  </div>
</template>

<script >
export default {
  methods: {
    async getRandomImages() {
      await this.$store.dispatch("getRandomImages",10);
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  padding: 30px;
  a {
    text-decoration: none;
  }
  .logo {
    img {
      width: 40px;
    }
  }
}
</style>
