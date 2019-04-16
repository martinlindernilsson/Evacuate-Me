import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://swapi.co/api/planets/?page=";

export default new Vuex.Store({
  state: {
    currentStep: 1,
    planets: [],
    climateOptions: {
      options: {
        option: { name: "steamy", search: ["hot", "tropical"], planets: [] },
        option: { name: "extreme", search: ["superheated", "polluted"], planets: [] },
        option: { name: "varying", search: ["temperate"], planets: [] },
        option: { name: "chilly", search: ["artic", "windy", "subartic"],  planets: [] }
      }
    },
    chosenPlanets: []
  },
  getters: {
    climateOptions(state) {
      return state.climateOptions;
    }
  },
  mutations: {
    setPlanets(state, planets) {
      state.planets = planets;
    },
    setChosenClimate: (state, payload) => {
      let chosenPlanetsList = [];
      state.planets.forEach(function(planet) {
        if (planet.climate.includes(JSON.stringify(payload))) {
          chosenPlanetsList.push(planet);
        }
      });
      state.chosenPlanets = chosenPlanetsList;
    }
  },
  actions: {
    fetchSwapi(store) {
      const pages = ["1", "2", "3", "4", "5", "6", "7"];
      let planetsArr = [];
      pages.forEach(function(item) {
        const pageurl = url + item;
        return fetch(pageurl, {
          method: "GET"
        })
          .then(response => response.json())
          .then(data => {
            data.results.forEach(function(item) {
              planetsArr.push(item);
            });
          })
          .catch(error => alert(error));
      });
      store.commit("setPlanets", planetsArr);
    }
  }
});
