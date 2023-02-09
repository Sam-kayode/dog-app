import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    images: [],
    detailImage: sessionStorage.getItem("image"),
    list: [],
  },

  mutations: {
    UPDATE_IMAGES(state, payload) {
      state.images = [...state.images, ...payload];
    },
    UPDATE_DETAIL_IMAGE(state, payload) {
      sessionStorage.setItem("image", payload);
    },
    UPDATE_LIST(state, payload) {
      state.list = payload;
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
    async getBreedList({ commit }) {
      try {
        const res = await axios.get(`list/all`);
        const data = res.data.message;
        commit("UPDATE_LIST", data);
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
    isImageUpdated(state) {
      return state.updated;
    },
    allBreeds(state){
        const list=state.list
       return Object.keys(list)

    }
  },
});
