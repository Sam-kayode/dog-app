import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    images: [],
  },

  mutations: {
    UPDATE_IMAGES(state, payload) {
      state.images = [...state.images, ...payload];
      console.log(state.images)
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
  },
});
