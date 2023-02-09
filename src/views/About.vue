<template>
  <Loader v-if="loading" />
  <div class="about" v-else>
    <div class="image">
      <image-container :src="getDetailImage" />
    </div>
    <article-placeholder :dogName="dogBreed"/>
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
    getArticle() {
      return this.$store.getters.getArticle;
    },
    getDetailImage() {
      return this.$store.getters.getDetailImage;
    },
    isImageUpdated() {
      return this.$store.getters.isImageUpdated;
    },
    dogBreed() {
      return this.$route.params.id;
    },
  },
  mounted() {
   
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
  }
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
