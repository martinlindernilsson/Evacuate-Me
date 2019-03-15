<template>
  <v-container fluid>
    <v-stepper class="status-bar" non-linear dark alt-labels>
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            color="#c91e00"
            editable
            :step="n"
            @click="$router.push(paths[n-1])"
          >{{stepName[n-1]}}</v-stepper-step>
          <template v-if="n != steps">
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
    steps: 5,
    stepName: ["Climate", "Neighbours", "Gravity", "Time", "Fly away"],
    paths: ["/prompt", "/", "/", "/", "/"]
  })
};
</script>

<style>
.status-bar {
  background-color: #1e2326 !important;
  box-shadow: none;
}
</style>
