<template>
  <div>
    <v-app class="app">
      <p class="infotext">
        Gravity.<br>How do you feel about the weight of yourself and everything around you.
      </p>
      <v-container fluid>
        <v-layout align-center class="bounce-and-slider">
          <v-flex>
            <Bounce/>
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

  mounted: function() {
    this.$store.state.currentStep = 3;
  }
};
</script>


<style scoped>
.app {
  background: transparent;
  justify-content: center;
}

.nextButton {
  display: inline;
  position: absolute;
  top: 25%;
  left: 70%;
}

.bounce-and-slider {
  position: absolute;
  top: 14%;
}
</style>