<template>
  <div>
    <div class="infotext">Här bestäms tiden...</div>
    <v-btn class="nextButton" @click="$router.push('/result')">Done</v-btn>
  </div>
</template>

<script>
export default {
  name: "Time",
  mounted: function() {
    this.$store.state.currentStep = 4;
  }
};
</script>


<style scoped>
</style>