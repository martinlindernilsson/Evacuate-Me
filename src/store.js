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
  },
  getters: {
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
              if (filteredPlanets.population > 100000000) {
                exists = true;
              }       
            }
            return exists;
          } else {
            return true;
          }
        })
        .filter(gravityPlanets => {
          if (state.chosenGravity) {
            let exists = false;
            let gravity = gravityPlanets.gravity
            if (gravity == 'unknown'){
              exists = true;        
            } else {
              gravity = gravityPlanets.gravity.substr(0,gravityPlanets.gravity.indexOf(' '))
              if (!gravity) {
                gravity = gravityPlanets.gravity.substr(gravityPlanets.gravity.indexOf(' ')+1);
              }
              if (state.chosenGravity < 25){
                if(gravity < 1){
                  exists = true;
                }
              } else if(state.chosenGravity > 25 && state.chosenGravity < 75){
                  if(gravity == 1){
                    exists = true;
                  }
              } else {
                  if(gravity > 1){
                    exists = true;
                  }
              }         
            }
            
            return exists;
          } else {
            return true;
          }
        }); // add .filter() for time also here */
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
