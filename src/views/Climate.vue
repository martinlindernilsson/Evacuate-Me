
<template>
  <div>
    <div class="infotext">Choose the climate you would like on your new planet</div>
    <div v-for="option in climateOptions.options" :key="option" class="climate-list">
      {{option.name}}
      <div class="choose-planet" @click="chooseClimate(option)">
        <Planet :data="option" /> <!-- TODO don't pass data props -->
      </div>
    </div>
    <v-btn class="nextButton" @click="$router.push('/population')">Next</v-btn>
  </div>
</template>

<script>
import Planet from "../components/Planet";
export default {
  name: "Climate",
  components: {
    Planet
  },
  computed: {
    climateOptions() {
      return this.$store.getters.climateOptions;
    }
  },
  mounted() {
    this.$store.state.currentStep = 1; //TODO use getters instead
    this.$store.dispatch("fetchSwapi");
  },
  methods: {
    chooseClimate: function(option) {
      this.$store.commit("setChosenClimate", option);
    }
  }
};
</script>


<style scoped>
.climate-list {
  display: inline-block;
  margin: 5%;
}
</style>