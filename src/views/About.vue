<template>
  <Loader v-if="loading" />
  <div class="about" v-else>
    <div class="image">
      <image-container :src="getDetailImage" />
    </div>
    <article-placeholder :dogBreed="$route.params.id" />

    <h2>More Images</h2>
    <div class="image-flex">
      <div class="" v-for="(image, i) in getDetailImages" :key="i">
        <image-container class="image-cont" :src="image" />
      </div>
    </div>
  </div>
</template>
<script>
import ImageContainer from "../components/ImageContainer.vue";
import Loader from "../components/Loader.vue";
import ArticlePlaceholder from "../components/ArticlePlaceholder.vue";
export default {
  data() {
    return {
      answer: "",
      loading: false,
    };
  },
  components: { ImageContainer, Loader, ArticlePlaceholder },
  computed: {
    getDetailImage() {
      return this.$store.getters.getDetailImage;
    },
    getDetailImages() {
      return this.$store.getters.getDetailImages;
    },
    params() {
      return this.$route.params.id;
    },
  },
  mounted() {
    if (this.params.includes("-")) {
      this.$store.dispatch("getRandomBreedImg", this.params.split("-")[0]);
    } else {
      this.$store.dispatch("getRandomBreedImg", this.params);
    }
  },
  methods: {
    getDogName(url) {
      let arr = url.split("/");
      return arr[4];
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  font-family: "Montserrat", sans-serif;

  .image {
    float: left;
    margin: 0 25px 25px 0;
    min-width: 35vw;
    @include mobile {
      width: 100%;
    }
  }
}
.image-flex {
  display: flex;
  flex-wrap: nowrap;
  width: calc(100vw - 10vw);
  overflow-x: auto;
  margin-bottom: 100px;
  margin-top: 20px;
  padding-bottom: 30px;

  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background: #d3d3d3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #806565;
    border-radius: 20px;
    border: 3.5px solid #d3d3d3;
  }
}
.image-cont {
  width: 200px !important;
  margin-right: 20px;
  flex: 0 0 100px;
}

:deep(h2) {
  font-size: 24px;
  margin-top: 25px;
  text-align: left;
}
:deep(p) {
  text-align: justify;
  font-size: 16px;
}
</style>
