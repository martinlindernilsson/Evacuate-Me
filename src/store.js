import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://swapi.co/api/planets/";

export default new Vuex.Store({
  state: {
    currentStep: 1,
    planets: []
  },
  getters: {
    planetClimates(state) {
      return state.planets.reduce((acc, planet) => {
        if (!acc.includes(planet.climate)) {
          acc.push(planet.climate);
        }
        return acc;
      }, []);
    }
  },
  mutations: {
    setPlanets(state, planets) {
      state.planets = planets;
    }
  },
  actions: {
    fetchSwapi(store) {
      return fetch(url, {
        method: "GET"
      })
        .then(response => response.json())
        .then(data => {
          store.commit("setPlanets", data.results);
        })
        .catch(error => alert(error));
    }
  }
});
