import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://swapi.co/api/planets/?page=";

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
      const pages = ['1','2','3','4','5','6','7'];
      let planetsArr = [];
      pages.forEach(function(item){
        const pageurl = url+item;
        return fetch(pageurl, {
          method: "GET"
        })
          .then(response => response.json())
          .then(data => {
            data.results.forEach(function(item){
              planetsArr.push(item)
            })
          })
          .catch(error => alert(error));
          
      })
      store.commit("setPlanets", planetsArr);

    }
  }
});
