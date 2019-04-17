import Vue from "vue";
import Vuex from "vuex";
import climateMapping from "./utils/climateMapping";

Vue.use(Vuex);

// const climateMapping = {
//   steamy: ["hot", "tropical"],
//   extreme: ["superheated", "polluted", "unknown"],
//   varying: ["temperate"],
//   chilly: ["artic", "windy", "subartic"]
// };

const url = "https://swapi.co/api/planets/?page=";

export default new Vuex.Store({
  state: {
    currentStep: 1,
    planets: [], // all planets fetched from API
    chosenClimate: null, // chosenClimate is used with climateMapping to filter planets
    chosenPopulation: null, //value 1-130
    chosenGravity: null, //value 1-100
    chosenDays:null, //value 150-1770
    chosenHours: null, //12-40
    chosenHead: "#049ED6",
    chosenBody:"#038DBF",
    chosenEye:"#0586FF"
  },
  getters: {
    getHead: state => {
      return state.chosenHead
    },
    getBody: state => {
      return state.chosenBody
    },
    getEye: state => {
      return state.chosenEye
    },
    // använd array.filter().filter().filter().filter()
    filteredPlanets(state) {
      return state.planets
        .filter(planet => {
          if (state.chosenClimate) {
            let exists = false;
            climateMapping[state.chosenClimate].forEach(search => {
              if (planet.climate.includes(search)) {
                exists = true;
              }
            });
            return exists;
          } else {
            return true;
          }
        })
        .filter(filteredPlanets => {
          if (state.chosenPopulation) {
            let exists = false;
            if (state.chosenPopulation < 65) {
              if (filteredPlanets.population < 100000000 || filteredPlanets.population == "unknown") {
                exists = true;
              }
            }else {
              if (filteredPlanets.population > 100000000 || filteredPlanets.population == "unknown") {
                exists = true;
              }       
            }
            return exists;
          } else {
            return true;
          }
        }); // add .filter() for gravity also here */
    }
  },
  mutations: {
    setPlanets(state, planets) {
      state.planets = planets;
    },
    setChosenClimate: (state, payload) => {
      state.chosenClimate = payload;
    },
    setChosenPopulation: (state, population) => {
      state.chosenPopulation = population;
    },
    setChosenGravity: (state, gravity) => {
      state.chosenGravity = gravity;
    },
    setChosenOrbitalPeriod : (state, days) => {
      state.chosenDays = days;
    },
    setChosenRotationPeriod : (state, hours) => {
      state.chosenHours= hours;
    },
    setChosenHeadColor : (state, head) => {
      state.chosenHead= head;
    },
    setChosenBodyColor : (state, body) => {
      state.chosenBody= body;
    },
    setChosenEyeColor : (state, eye) => {
      state.chosenEye= eye;
    },
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
