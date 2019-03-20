
<template>
  <div>
    <div class="infotext">Välkommen. Här väljs klimat...</div>
    <ul class="climate-list">
      <li v-for="climate in $store.getters.planetClimates" :key="climate">{{climate}}</li>
    </ul>
    <v-btn class="nextButton" @click="$router.push('/population')">Next</v-btn>
  </div>
</template>

<script>
export default {
  name: "Climate",
  mounted() {
    this.$store.state.currentStep = 1;
    this.$store.dispatch('fetchSwapi');
  },
};
</script>


<style scoped>
.next {
  margin: 5%;
}
</style>