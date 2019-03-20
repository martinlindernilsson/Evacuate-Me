<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    this.starGenerator();
  },
  methods: {
    starGenerator() {
      // https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
      // Sets the amount of stars to generate
      const starAmount = 100;

      // Function that generates random x, y values based on container size
      function getRandomPosition() {
        var y = window.innerWidth;
        var x = window.innerHeight;
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
      }

      for (let i = 0; i < starAmount; i++) {
        let star = document.createElement("div");
        star.className = "star";
        var xy = getRandomPosition();
        star.style.top = xy[0] + "px";
        star.style.left = xy[1] + "px";
        document.body.append(star);
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
body {
  background-color: #1e2326;
}

.star {
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: white;
  z-index: -100;
}

.nextButton {
  margin: 5%;
}

#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
