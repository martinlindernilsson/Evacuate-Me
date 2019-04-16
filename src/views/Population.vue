<template>
  <div>
    <div class="infotext">
      <h2>Neighbours</h2>
      Are you a social person or a lone wolf?
    </div>
    <v-app id="population">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex>
            <v-slider
              v-model="slider"
              max="140"
              min="1"
              step="1"
              color="#c91e00"
              track-color="#FFFFFF"
              thumb-color="#c91e00"
            ></v-slider>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex>
            <div class="planet">
               <div class="circle"></div>
              <div id="people">
                <div v-for="people in slider" :key="people.id" class="peopleIcon">
                  <i class="fas fa-user"></i>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>

        <v-btn class="nextButton" @click="$router.push('/gravity')">Next</v-btn>
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
    };
  },
  mounted: function() {
    this.$store.state.currentStep = 2;
  },
  methods: {}
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
  width:100%
}

.circle {
  background-color: green;
  width: 300px;
  height:300px;
  border-radius: 50%;
  box-shadow: 0 0 30px #ad8766;
}

.peopleIcon {
  display: inline-block;
  width: 15px;
}

#people {
  display: block;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: absolute;
  z-index: 1;
  top:23%;
}
</style>
