<template>
  <div class="navbar d-flex align-items-center justify-space-between">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="" />
    </div>

    <a href="https://dog.ceo/dog-api/documentation" target="_blank"
      >Dog-Api documentation</a
    >
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.navbar {
  padding: 10px 30px;
  a {
    text-decoration: none;
  }
  .logo {
    img {
      width: 30px;
    }
  }
}
</style>
