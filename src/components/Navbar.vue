<template>
  <div class="navbar d-flex align-center justify-space-between">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="" />
      </router-link>
    </div>
    <div class="d-flex align-center">
      <a href="https://dog.ceo/dog-api/documentation" target="_blank"
        ><p>Dog-Api documentation</p></a
      >
    </div>
  </div>
</template>

<script >
export default {
  methods: {},
};
</script>

<style scoped lang="scss">
.navbar {
  padding: 30px 5%;
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
