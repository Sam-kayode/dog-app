import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    images: [],
    filteredImages: [],
    detailImage: "",
    list: [],
    load: true,
    moreImages: [],
  },

  mutations: {
    UPDATE_IMAGES(state, payload) {
      state.images = [...state.images, ...payload];
    },
    UPDATE_MORE_IMAGES(state, payload) {
      state.moreImages = [...payload];
    },
    UPDATE_DETAIL_IMAGE(state, payload) {
      state.detailImage=payload;
    },
    UPDATE_LIST(state, payload) {
      state.list = payload;
    },
    REPLACE_IMAGES(state, payload) {
      state.filteredImages = [...payload];
    },
    PRELOAD_STATE(state, payload) {
      state.load = payload;
    },
  },

  actions: {
    async getRandomImages({ commit }, payload) {
      commit("PRELOAD_STATE", true);
      try {
        const res = await axios.get(`/breeds/image/random/${payload}`);
        const data = res.data.message;
        commit("UPDATE_IMAGES", data);
      } catch (error) {
        console.log(error);
      }
      commit("PRELOAD_STATE", false);
    },
    async getRandomBreedImg({ commit }, payload) {
      try {
        const res = await axios.get(`/breed/${payload}/images/random/10`);
        const data = res.data.message;
        commit("UPDATE_MORE_IMAGES", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getBreedList({ commit }) {
      try {
        const res = await axios.get(`/breeds/list/all`);
        const data = res.data.message;
        commit("UPDATE_LIST", data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    allImages(state) {
      return state.images;
    },
    getDetailImage(state) {
      return state.detailImage
    },
    getDetailImages(state) {
      return state.moreImages;
    },
    isImageUpdated(state) {
      return state.updated;
    },
    allBreeds(state) {
      const list = state.list;
      return Object.keys(list);
    },
  },
});
