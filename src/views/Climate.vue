
<template>
  <div>
    <div class="infotext">Choose the climate you would like on your new planet</div>
    
    <div v-for="option in Object.keys(climates)" :key="option" class="climate-list">
      <div v-if="moon == option" class="moon">
        </div> 
      <div class="choose-planet" @click="() => {chooseClimate(option)}">     
        <Planet :data='option'/>
      </div>
      {{option}}
    </div>
    <v-btn class="nextButton" @click="$router.push('/population')">Next</v-btn>
  </div>
</template>

<script>
import Planet from "../components/Planet";
import climates from "../utils/climateMapping";

export default {
  name: "Climate",
  components: {
    Planet
  },
  data(){
    return{
      climates,
      moon: "Steamy"
    }
  },
  mounted() {
    this.$store.state.currentStep = 1; //TODO use getters instead
    this.$store.dispatch("fetchSwapi");
  },
  methods: {
    chooseClimate: function(option) {
      this.moon = option
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
.choose-planet{
  display: inline-block;
  width: 80px;
  height: 100px;
}
.moon {
  background-color: grey;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 30px #ad8766;
  margin: 0;
}
</style>