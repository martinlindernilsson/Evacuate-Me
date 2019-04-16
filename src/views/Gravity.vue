<template>
  <div>
    <v-app class="app">
      <v-container fluid>
        <v-layout justify-center>
          <p class="infotext">Gravity.
            <br>How do you feel about the weight of yourself and everything around you.
          </p>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs10>
            <v-slider
              v-model="slider"
              dark
              color="red"
              max="100"
              min="0"
              prepend-icon="fas fa-weight-hanging fa-2x"
              append-icon="fas fa-weight-hanging fa-lg"
            ></v-slider>
          </v-flex>
        </v-layout>
        
        <v-layout class="ball-planet" justify-center>
          <v-flex class="ball" justify-center>
            <Bounce/>
          </v-flex>
       
          <v-flex xs2 class="circle-div" justify-center>
            <div class="circle"></div>
          </v-flex>
        </v-layout>
        
        <v-layout justify-center>
          <v-btn class="nextButton" @click="$router.push('/time')">Next</v-btn>
        </v-layout>
        
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Bounce from "../components/Bounce";
export default {
  name: "Gravity",
  components: { Bounce },
  data() {
    return {
      slider: 45
    };
  },
  mounted: function() {
    this.$store.state.currentStep = 3;
  }
};
</script>


<style scoped>
.app {
  background: transparent;
}

.infotext {
  color: #c91e00;
  font-size: 16pt;
}

.nextButton {
  position: absolute;
  top: 45em;

}
.ball-planet {
  position: absolute;
  top: 60%;
  left: 40%;
}

.ball {
  position: absolute;
  bottom: 180px;
  left: 56px;
  
}

.circle-div {
  
  
}

.circle {
  display: inline-block;
  position: absolute;
  z-index: -1;
  
  border-radius: 50%;
  height: 160px;
  width: 160px;
  background-color: aquamarine;
}
</style>