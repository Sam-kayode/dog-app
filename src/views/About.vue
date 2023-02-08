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
    <p>{{ answer }}</p>
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
        prompt: "70 words essay on german sheperd dogs",
        temperature: 0.3,
        max_tokens: 150,
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

<style scoped>
.image {
  float: left;
  margin-right: 25px;
  min-width: 30vw;
}
p {
  text-align: justify;
  font-size: 18px;
  color:red;
}
</style>
