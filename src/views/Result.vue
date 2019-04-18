<template>
  <div class="results">
    <div class="infotext">The results are in!</div>
    <div class="box-fluid">
      <div class="animation">
        <div class="planet" :style="{background: planetColor}"></div>
        <img class="rocket" src="../assets/rocket.png" style="z-index: 0;">
      </div>
      <div class="planet-result">
        <p>
          {{name}},
          <br>you will be evacuated to the planet...
        </p>
        <h1 class="name-of-planet">
          <p>{{planet.name}}</p>
        </h1>
        <p class="population">Population: {{planet.population}}</p>
        <p class="gravity">Gravity: {{planet.gravity}}</p>
        <p class="rotation">Rotaion period: {{planet.rotation_period}} hours</p>
        <p class="orbital">Orbital period: {{planet.orbital_period}} days</p>
        <Avatar/>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../components/Avatar";
export default {
  name: "Result",
  components: { Avatar },
  data() {
    return {
      planet: this.$store.getters.filteredPlanets[0],
      planetColor: this.$store.state.chosenPlanetColor
    };
  },
  computed: {
    name() {
      return this.$store.state.chosenName;
    }
  },
  mounted: function() {
    this.$store.state.currentStep = 5;
  },
  methods: {}
};
</script>


<style scoped>
.box-fluid {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 50px;
}
.animation {
  display: flex;
  justify-content: flex-start;
  max-width: 900px;
  min-width: 500px;
  max-height: 300px;
  min-height: 300px;
  position: relative;
  left: 0px;
}
.planet {
  position: absolute;
  width: 120px;
  height: 120px;
  background: blue;
  border-radius: 50%;
  left: 200px;
  top: 90px;
  box-shadow: 0 0 30px #3a72d3;
  z-index: 1;
}
.rocket {
  position: absolute;
  width: 50px;
  left: 240px;
  top: 80px;
  -webkit-animation: myOrbit 4s linear forwards; /* Chrome, Safari 5 */
  animation: myOrbit 4s linear forwards;
}
.planet-result {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  min-width: 500px;
}
.infotext {
  color: #c91e00;
  font-size: 16pt;
}

@keyframes myOrbit {
  0% {
    -webkit-transform: rotate(180deg) translateX(150px);
  }
  70% {
    -webkit-transform: rotate(-135deg) translateX(150px);
    top: 80px;
    left: 240px;
  }
  100% {
    -webkit-transform: rotate(-135deg) translateX(150px) rotate(97deg);
    top: 125px;
    left: 280px;
  }
}
</style>