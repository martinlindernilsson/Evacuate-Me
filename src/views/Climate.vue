
<template>
  <div>
    <div class="infotext">Choose the climate you would like on your new planet</div>
    <div v-for="c in climate" :key="c" class="planets">
      {{c}}
      <Planet :data="c"/>
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
  data: () => ({
    climate: ["tropical", "frozen", "jungles" ],
  }),
  mounted: function() {
    this.$store.state.currentStep = 1;
  }
};
</script>


<style scoped>
.planets {
  display: inline-block;
  margin: 5%;
}
</style>