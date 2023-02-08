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
    this.example();
  },
  methods: {
    async example() {
      const apiKey = "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";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        model: "text-davinci-003",
        prompt:
          "complete 120 words article about german shepherd dogs in appropriate HTML tags indicating heading ,paragraphand sub-heading ",
        temperature: 0.3,
        max_tokens: 350,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      };

      const res = await axios.post(
        "https://api.openai.com/v1/completions",
        data,
        { headers }
      );
      console.log(res);
      this.answer = res.data.choices[0].text;
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  font-family: 'Montserrat', sans-serif;

  .image {
    float: left;
    margin: 0 25px 25px 0;
    min-width: 35vw;
  }
}

:deep(h2) {
  font-size: 24px;
  margin-top: 35px;
  text-align:left;
}
:deep(p) {
  text-align: justify;
  font-size: 16px;
}
</style>
