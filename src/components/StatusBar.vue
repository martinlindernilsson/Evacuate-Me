<template>
  <v-container>
    <v-stepper class="status-bar" non-linear dark alt-labels>
      <v-stepper-header>

        <v-stepper-step
          color="#c91e00"
          editable
          step="1"
          @click="$router.push({path: '/createavatar'})"
        >Avatar</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#c91e00" editable step="2">Climate</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#c91e00" editable step="3">Neighbours</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#c91e00" editable step="4">Gravity</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#c91e00" editable step="5">Time</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#c91e00" editable step="6">Fly away</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.status-bar {
  background-color: #1e2326 !important;
  box-shadow: none;
}
</style>
