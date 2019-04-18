//TODO fix reload problem
<template>
  <v-container fluid>
    <v-stepper v-model="$store.state.currentStep" class="status-bar" dark alt-labels>
      <v-stepper-header>
        <template v-for="n in stepName.length">
          <v-stepper-step
            :key="`${n}-step`"
            color="#c91e00"
            :complete="n < $store.state.currentStep"
            :step="n"
          >{{stepName[n-1]}}</v-stepper-step>
          <template v-if="n != stepName.length">
            <v-divider :key="`${n}-divider`"></v-divider>
          </template>
        </template>
      </v-stepper-header>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    stepName: ["Climate", "Population", "Gravity", "Time", "Fly away"],
    paths: ["/climate", "/population", "/gravity", "/time", "/result"]
  })
};
</script>

<style>
.status-bar {
  background-color: transparent !important;
  box-shadow: none;
}
</style>
