<template>
  <div>
    <div class="infotext">Time is relative...</div>
    <div class="sliderValue">Hours in a day {{sliderValue}}</div>

    <figure class="sphere" :style="{'-webkit-animation-duration': sliderValue/20 + 's'}"></figure>

    <circle-slider
      v-model="sliderValue"
      class="circleSlider"
      :side="150"
      :min="12"
      :max="36"
      :step-size="1"
      :circle-width-rel="20"
      :progress-width-rel="10"
      :knob-radius="10"
      :progress-color="null"
      :knob-color="changeColor()"
      :circle-color="changeColor()"
    ></circle-slider>

    <v-btn class="nextButton" @click="$router.push('/result')">Done</v-btn>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      sliderValue: 24,
      progressColor: "#00be7e",
      days: 365
    };
  },
  mounted: function() {
    this.$store.state.currentStep = 4;
  },
  methods: {
    changeColor: function() {
      if (this.sliderValue < 24) {
        return "red";
      } else if (this.sliderValue > 24) {
        return "#00be7e";
      } else {
        return "#334860";
      }
    }
  }
};
</script>


<style scoped>
.sliderValue {
  margin-top: 4%;
}
.circleSlider {
  display: inline;
}
.sphere {
  display: inline-block;
  background: #f5a62f;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin: 0;
  animation: rotate 4s linear infinite;
  background: radial-gradient(circle at 75px 75px, #f7b654b0 10%, #0a531a 40%);
  transform-style: preserve-3d;
}
@keyframes rotate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400px 0;
  }
}
</style>