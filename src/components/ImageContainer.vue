<template>
  <v-img
    lazy-src="https://picsum.photos/id/11/100/60200"
    src="https://picsum.photos/id/11/100/6009"
    aspect-ratio="1"
    cover
    class="bg-grey-lighten-2 rounded-lg"
    alt="Image of a dog"
  >
    <template v-slot:placeholder>
      <v-row class="d-flex fill-height">
        <div class="box"></div>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "Image of a dog",
    },
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 130%;
  -webkit-mask: linear-gradient(#000 0 0) top / 100% 100%;
  -webkit-mask-repeat: no-repeat;
  background: linear-gradient(90deg, #ccca 40%, #fffa, #ccca 60%) right/300%
    100%;
  animation: motion 1s linear infinite;
}
@keyframes motion {
  to {
    background-position: left;
  }
}
</style>