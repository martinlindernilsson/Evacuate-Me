<template>
  <div>
    <v-btn fab large :color='setColor(data)' class="planet"/>
  </div>
</template>


<script>
export default {
  name: "Planet",
  props: ["data"],
  data: () => ({
    climates: { tropical: "orange", frozen: "blue", jungles: "green" }
  }),
  methods: {
    setColor: function(data) {
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