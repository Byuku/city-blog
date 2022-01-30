import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    cities: null,
  },
  getters: {
    getCities: (state) => {
      return state.cities;
    },
  },
  mutations: {
    SET_CITIES(state, data) {
      state.cities = data;
    },
  },
  actions: {
    getCitiesDataAction({ commit }) {
      axios.get("cities.json")
        .then((response) => {
          commit("SET_CITIES", response.data);
        })
        .catch((error) => {
          console.log("ERREUR AXIOS GET CITIES", error);
        });
    },
  },
  modules: {},
});
