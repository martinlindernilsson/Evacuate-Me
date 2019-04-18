<template>
  <div>
    <v-btn fab large :color='setPlanetColor(data)' class="planet"/>
  </div>
</template>


<script>
export default {
  name: "Planet",
  props: {
    data: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    climates: { Steamy: "orange", Extreme: "red", Varying: "green", Chilly: "blue" }
  }),
  methods: {
    setPlanetColor: function(data) {
      for (let key in this.climates) {
        if (data === key) {
          return this.climates[key];
        }
      }
    }
  }
};
</script>


<style scoped>
</style>