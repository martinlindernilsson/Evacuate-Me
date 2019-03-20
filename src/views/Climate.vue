
<template>
  <div>
    <div class="infotext">Välkommen. Här väljs klimat...</div>
    <v-btn class="nextButton" @click="$router.push('/population')">Next</v-btn>
  </div>
</template>

<script>
export default {
  name: "Climate",
  mounted: function() {
    this.$store.state.currentStep = 1;
  }
};
</script>


<style scoped>
.next {
  margin: 5%;
}
</style>