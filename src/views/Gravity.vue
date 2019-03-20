<template>
  <div>
    <div class="infotext">Här bestäms tyngkraften...</div>
    <v-btn class="nextButton" @click="$router.push('/time')">Next</v-btn>
  </div>
</template>

<script>
export default {
  name: "Gravity",
  mounted: function() {
    this.$store.state.currentStep = 3;
  }
};
</script>


<style scoped>
</style>