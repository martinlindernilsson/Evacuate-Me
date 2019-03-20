<template>
  <div>
    <div class="infotext">Här visas resultatet...</div>
  </div>
</template>

<script>
export default {
  name: "Result",
  mounted: function() {
    this.$store.state.currentStep = 5;
  }
};
</script>


<style scoped>
</style>