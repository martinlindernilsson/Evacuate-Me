
<template>
  <div>
    <div class="infotext">Choose the climate you would like on your new planet</div>
    <div v-for="climate in $store.getters.planetClimates" :key="climate" class="climate-list">
      {{climate}}
      <Planet :data="climate"/>
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
  mounted() {
    this.$store.state.currentStep = 1;
    this.$store.dispatch('fetchSwapi');
  }
};
</script>


<style scoped>
.climate-list {
  display: inline-block;
  margin: 5%;
}
</style>