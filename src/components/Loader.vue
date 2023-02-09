<template>
  <div class="loader">
    <img src="@/assets/images/loader.gif" alt="" />
    <div class="linear-progress">
      <v-progress-linear
        color="#806565"
        indeterminate
        rounded
        height="3"
        class="mt-4"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  img {
    width: 100px;
    margin-top: 10px;
  }

  .linear-progress {
    width: 200px;
  }
}
</style>