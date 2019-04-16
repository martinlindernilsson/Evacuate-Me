<template>
  <div>
    <div class="infotext">Här väljs population...</div>
    <v-app id="inspire">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex>
            <v-slider
              v-model="slider"
              :max="160"
              :min="20"
              :step="10"
              :color="ex1.color"
              :track-color="ex2.color"
              :thumb-color="ex3.color"
            ></v-slider>
          </v-flex>
        </v-layout>
        <div class="planetAndButton-fluid">
          <v-btn class="nextButton" @click="$router.push('/gravity')">Next</v-btn>
          <div id="circle"></div>
          <svg height="100%" width="100%" @click="$router.push('/gravity')">
            <circle cx="50%" cy="50%" r="160" fill="green"></circle>
            <circle  cx="50%" cy="50%" :r="slider" fill="blue">Next</circle>
          </svg>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Population",
  data() {
    return {
      slider: 50,
      ex1: { label: "color", val: 25, color: "#c91e00" },
      ex2: { label: "track-color", val: 75, color: "#FFFFFF" },
      ex3: { label: "thumb-color", val: 50, color: "#c91e00" }
    };
  },
  mounted: function() {
    this.$store.state.currentStep = 2;
    this.starGenerator();
  },
  methods: {
    starGenerator() {
      // https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
      // Sets the amount of stars to generate
      const people = "100";

      // Function that generates random x, y values based on container size
      function getRandomPosition() {
        var cont = document.getElementById("circle")
        var y = cont.offsetWidth;
        var x = cont.offsetHeight;
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
      }
      var cont = document.getElementById("circle")
      for (let i = 0; i < people; i++) {
        let person = document.createElement("div");
        person.className = "person";
        var xy = getRandomPosition();
        person.style.top = xy[0] + "px";
        person.style.left = xy[1] + "px";
        
        cont.append(person);
      }

      
    }
  }
};
</script>


<style scoped>
#inspire {
  display: flex;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
  background: transparent;
  color: white !important;
}

.planetAndButton-fluid {
  height: 60%;
}

.person{
  background: blue;
  color:plum;
  width:10px;
  height: 10px;
}
#circle{
  border-radius: 50%;
  width: 300px;
  height:300px;
}

</style>
