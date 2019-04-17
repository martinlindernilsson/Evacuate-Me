import Vue from "vue";
import Vuex from "vuex";
//import climateMapping from "./utils/climateMapping";

Vue.use(Vuex);

const climateMapping = {
  "steamy":["hot", "tropical"],
  "extreme": ["superheated", "polluted", "unknown"],
  "varying": ["temperate"],
  "chilly": ["artic", "windy", "subartic"]
}

const url = "https://swapi.co/api/planets/?page=";

export default new Vuex.Store({
  state: {
    currentStep: 1,
    planets: [], // all planets fetched from API
    chosenClimate: null,
    chosenPopulation: null, //value 1-130
    chosenGravity: null //value 1-100
  },
  getters: {
    // använd array.filter().filter().filter().filter()
    filteredPlanets(state) {
      return state.planets.filter(planet => {
        if (state.chosenClimate) {
          let exists = false;
          climateMapping[state.chosenClimate].forEach((search) => {
            if (planet.climate.includes(search)) {
              exists = true;
            }
          });
          return exists;
        } else {
          return true;
        }
      })//.filter(filteredPlanets => {
        //if (state.chosen){
          //let exists = false;

        //}
      //}) // add .filter() for population aso here
    }
  },
  mutations: {
    setPlanets(state, planets) {
      state.planets = planets;
    },
    setChosenClimate: (state, payload) => {
      state.chosenClimate = payload;
    },
    setChosenPopulation : (state, population) => {
      state.chosenPopulation = population;
    },
    setChosenGravity : (state, gravity) => {
      state.chosenGravity = gravity;
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
