import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    images: [],
    detailImage: "",
    article: "",
  },

  mutations: {
    UPDATE_IMAGES(state, payload) {
      state.images = [...state.images, ...payload];
      console.log(state.images);
    },
    UPDATE_DETAIL_IMAGE(state, payload) {
      state.detailImage = payload;
    },
    SET_ARTICLE(state, payload) {
      state.article = payload;
    },
  },

  actions: {
    async getRandomImages({ commit }, payload) {
      try {
        const res = await axios.get(`image/random/${payload}`);
        const data = res.data.message;
        commit("UPDATE_IMAGES", data);
      } catch (error) {
        console.log(error.messge);
      }
    },
    async generateContent({ commit }, payload) {
      const apiKey = import.meta.env.VITE_CHATGPT_KEY;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        model: "text-davinci-003",
        prompt: `complete 120 words article about ${payload} dogs in appropriate HTML tags indicating heading ,paragraphand sub-heading on history, appearance and personality`,
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
      const answer = res.data.choices[0].text;

      commit("SET_ARTICLE", answer);
    },
  },

  getters: {
    allImages(state) {
      return state.images;
    },
    getDetailImage(state) {
      return state.detailImage;
    },
    getArticle(state) {
      return state.article;
    },
  },
});
