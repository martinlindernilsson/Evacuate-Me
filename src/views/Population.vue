<template>
  <div>
    <div class="infotext">
      Neighbours.
      <br>Are you a social person or a lone wolf?
    </div>
    <v-app id="population">
      <v-container>
        <v-layout row wrap>
          <v-flex>
            <v-slider
              v-model="slider"
              max="130"
              min="1"
              step="1"
              color="#c91e00"
              track-color="#FFFFFF"
              thumb-color="#c91e00"
              @click="setPopulation"
            ></v-slider>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex>
            <div class="planet">
              <div class="circle" :style='"background-color:" + planetColor'>
              <div id="people">
                <div v-for="people in slider" :key="people.id" class="peopleIcon">
                  <i class="fab fa-reddit-alien"></i>
                </div>
              </div>
              </div>
            </div>
          </v-flex>
          <v-flex>
            <v-btn class="nextButton" @click="$router.push('/gravity')">Next</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Population",
  data() {
    return {
      slider: 2,
      planetColor: this.$store.state.chosenPlanetColor
    };
  },
  mounted: function() {
    this.$store.state.currentStep = 2;
  },
  methods: {
    setPopulation: function() {
      this.$store.commit("setChosenPopulation", this.slider);
    }
  }
};
</script>


<style scoped>
#population {
  display: block;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  background: transparent;
  color: white !important;
}

.planet {
  display: flex;
  justify-content: center;
  width: 100%;
}

.circle {
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 30px #ad8766;
  padding-top: 45px;
}

.peopleIcon {
  display: inline-block;
  width: 15px;
}

#people {
  display: block;
  width: 200px;
  height: 200px;
  z-index: 1;
}
</style>
