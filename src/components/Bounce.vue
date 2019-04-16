<template>
  <div>
    <v-app class="app">
      <v-container fluid>
        <v-layout justify-center>
          <v-flex xs1>
            <i class="fas fa-weight-hanging fa-md small-icon"></i>
          </v-flex>
          <v-flex xs9>
            <v-slider
              v-model="slider"
              dark
              color="red"
              max="100"
              min="0"
            ></v-slider>
          </v-flex>
          <v-flex>
            <i class="fas fa-weight-hanging fa-3x"></i>
          </v-flex>
        </v-layout>

        <v-layout class="ball-planet">
          <v-flex class="ball">
            <div id="ball" :style="{'-webkit-animation-duration': 0.2 + (slider/80) + 's'}"></div>
            <div id="ground"></div>
            <div id="shadow" :style="{'-webkit-animation-duration': 0.2 + (slider/80) + 's'}"></div>
          </v-flex>

          <v-flex class="circle-div">
            <div class="circle"></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Bounce",
  data() {
    return {
      slider: 45
    };
  },
  mounted: function() {}
};
</script>


<style scoped>
.app {
  position: absolute;
  background: transparent;
}

.small-icon {
  position: absolute;
  top: 38px;
  left: 38px

}

.ball-planet {
  position: absolute;
  top: 45%;
  left: 40%;
}

.ball {
  position: absolute;
  bottom: 210px;
  left: 57px;
}

.circle {
  display: inline-block;
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  background-color: aquamarine;
  box-shadow: 0 0 30px #ad8766
}

#ground {
  background: #ad8766;
  top: 18em;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

#shadow {
  position: relative;
  top: 234px;
  left: 22px;
  margin-left: -1em;
  width: 2em;
  height: 1em;
  background: rgb(41, 39, 39);
  border-radius: 50%;
  -webkit-animation: pulse 0.5s infinite alternate;
  -moz-animation: pulse 0.5s infinite alternate;
  -o-animation: pulse 0.5s infinite alternate;
  animation: pulse 0.5s infinite alternate;
}

@-webkit-keyframes pulse {
  0% {
    width: 2em;
    margin-left: -1em;
  }
  75% {
    width: 2.5em;
    margin-left: -1.25em;
  }
  100% {
    width: 3em;
    margin-left: -1.5em;
  }
}
@-webkit-keyframes pulse {
  0% {
    width: 2em;
    margin-left: -1em;
  }
  75% {
    width: 2.5em;
    margin-left: -1.25em;
  }
  100% {
    width: 3em;
    margin-left: -1.5em;
  }
}
@-moz-keyframes pulse {
  0% {
    width: 2em;
    margin-left: -1em;
  }
  75% {
    width: 2.5em;
    margin-left: -1.25em;
  }
  100% {
    width: 3em;
    margin-left: -1.5em;
  }
}
@-o-keyframes pulse {
  0% {
    width: 2em;
    margin-left: -1em;
  }
  75% {
    width: 2.5em;
    margin-left: -1.25em;
  }
  100% {
    width: 3em;
    margin-left: -1.5em;
  }
}
@keyframes pulse {
  0% {
    width: 2em;
    margin-left: -1em;
  }
  75% {
    width: 2.5em;
    margin-left: -1.25em;
  }
  100% {
    width: 3em;
    margin-left: -1.5em;
  }
}

#ball {
  position: relative;
  background: #c91e00;

  border-radius: 50%;
  margin: 0 auto;
  z-index: 2;
  -webkit-animation: bounce 0.5s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite
    alternate;
  -moz-animation: bounce 0.5s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite
    alternate;
  -o-animation: bounce 0.5s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite
    alternate;
  animation: bounce 0.5s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite alternate;
}

@-webkit-keyframes bounce {
  0%,
  10% {
    top: 3em;
    height: 3em;
    width: 3em;
  }
  15% {
    height: 3.15em;
    width: 2.9em;
  }
  35% {
    height: 4em;
    width: 2.5em;
  }
  75% {
    height: 4em;
    width: 2.5em;
  }
  95% {
    height: 2em;
    width: 3.5em;
  }
  100% {
    top: 18em;
    height: 1em;
    width: 3em;
  }
}
@-moz-keyframes bounce {
  0%,
  10% {
    top: 3em;
    height: 3em;
    width: 3em;
  }
  15% {
    height: 3.15em;
    width: 2.9em;
  }
  35% {
    height: 4em;
    width: 2.5em;
  }
  75% {
    height: 4em;
    width: 2.5em;
  }
  95% {
    height: 2em;
    width: 3.5em;
  }
  100% {
    top: 18em;
    height: 1em;
    width: 3em;
  }
}
@-o-keyframes bounce {
  0%,
  10% {
    top: 3em;
    height: 3em;
    width: 3em;
  }
  15% {
    height: 3.15em;
    width: 2.9em;
  }
  35% {
    height: 4em;
    width: 2.5em;
  }
  75% {
    height: 4em;
    width: 2.5em;
  }
  95% {
    height: 2em;
    width: 3.5em;
  }
  100% {
    top: 18em;
    height: 1em;
    width: 3em;
  }
}
@keyframes bounce {
  0%,
  10% {
    top: 3em;
    height: 3em;
    width: 3em;
  }
  15% {
    height: 3.15em;
    width: 2.9em;
  }
  35% {
    height: 4em;
    width: 2.5em;
  }
  75% {
    height: 4em;
    width: 2.5em;
  }
  95% {
    height: 2em;
    width: 3.5em;
  }
  100% {
    top: 18em;
    height: 1em;
    width: 3em;
  }
}
</style>