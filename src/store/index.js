import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    images: [],
    detailImage: sessionStorage.getItem("image"),
    article: "",
    updated: null,
  },

  mutations: {
    UPDATE_IMAGES(state, payload) {
      state.images = [...state.images, ...payload];
      //   console.log(state.images);
    },
    UPDATE_DETAIL_IMAGE(state, payload) {
      sessionStorage.setItem("image", payload);
      console.log(sessionStorage.getItem("image"));
    },
    SET_ARTICLE(state, payload) {
      state.article = payload;
    },
    IS_IMAGE_UPDATED(state, payload) {
      state.updated = payload;
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
    getDetailImage() {
      return sessionStorage.getItem("image");
    },
    getArticle(state) {
      return state.article;
    },
    isImageUpdated(state) {
      return state.updated;
    },
  },
});
