<template>
  <div id="app">
    <!--<Particles/>-->
    <router-view/>
  </div>
</template>
<script>
//import Particles from "@/components/Particles.vue";
export default {
  components: {
    //Particles
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
body {
  background-color: #1e2326;
}

.nextButton {
  margin: 5%;
}

#app {
  height: 100vh;
  width: 100vw;
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding-top: 5%;
}
.router-view {
  width: 100vw;
  height: 90vh;
  top: 0;
  left: 0;
  position: absolute;
}

</style>
