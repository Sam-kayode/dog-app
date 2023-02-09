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
