<template>
  <div class="about">
    <div class="image">
      <image-container
        src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"
      />
      <!-- <img
        src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"
        alt=""
      /> -->
    </div>
    <div v-html="answer"></div>
  </div>
</template>
<script>
import axios from "axios";
import ImageContainer from "../components/ImageContainer.vue";
export default {
  data() {
    return {
      answer: "",
    };
  },
  components: { ImageContainer },
  mounted() {
    if (!this.answer) {
      this.example();
    }
  },
  methods: {
   
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
