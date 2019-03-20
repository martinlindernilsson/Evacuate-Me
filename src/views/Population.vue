<template>
  <div>
    <div class="infotext">Här väljs population...</div>
    <v-btn class="nextButton" @click="$router.push('/gravity')">Next</v-btn>
  </div>
</template>

<script>
export default {
  name: "Population",
  mounted: function() {
    this.$store.state.currentStep = 2;
  }
};
</script>


<style scoped>
</style>